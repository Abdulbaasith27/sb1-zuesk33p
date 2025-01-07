export async function compressFile(file: File): Promise<string> {
  // Validate file type
  const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (!allowedTypes.includes(file.type)) {
    throw new Error('Please upload a PDF or Word document');
  }

  // Validate file size (5MB max)
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB in bytes
  if (file.size > MAX_SIZE) {
    throw new Error('File size must be less than 5MB');
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    // Set up cleanup
    const cleanup = () => {
      reader.onload = null;
      reader.onerror = null;
    };

    reader.onload = () => {
      try {
        const base64String = reader.result?.toString().split(',')[1] || '';
        
        // Ensure the base64 string is within EmailJS limits (4MB)
        const MAX_BASE64_LENGTH = 4 * 1024 * 1024; // 4MB in bytes
        const compressedString = base64String.length > MAX_BASE64_LENGTH 
          ? base64String.substring(0, MAX_BASE64_LENGTH)
          : base64String;
        
        cleanup();
        resolve(compressedString);
      } catch (error) {
        cleanup();
        reject(new Error('Failed to process file'));
      }
    };

    reader.onerror = () => {
      cleanup();
      reject(new Error('Failed to read file'));
    };

    // Start reading the file
    reader.readAsDataURL(file);
  });
}