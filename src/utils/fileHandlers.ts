import { Photo } from '../types/Photo';

export async function handleFileSelect(files: FileList): Promise<Photo[]> {
  const newPhotos: Photo[] = [];
  const errors: string[] = [];

  for (const file of Array.from(files)) {
    try {
      if (!file.type.startsWith('image/')) {
        errors.push(`${file.name} is not an image file`);
        continue;
      }

      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        errors.push(`${file.name} exceeds 10MB size limit`);
        continue;
      }

      const photoUrl = await readFileAsDataURL(file);
      const dimensions = await getImageDimensions(photoUrl);
      
      const photo: Photo = {
        id: crypto.randomUUID(),
        url: photoUrl,
        title: formatFileName(file.name),
        description: `Uploaded on ${new Date().toLocaleDateString()}`,
        width: dimensions.width,
        height: dimensions.height
      };
      
      newPhotos.push(photo);
    } catch (error) {
      errors.push(`Failed to process ${file.name}: ${error.message}`);
    }
  }

  if (errors.length > 0) {
    console.error('Upload errors:', errors);
    alert(`Some files couldn't be uploaded:\n${errors.join('\n')}`);
  }

  return newPhotos;
}

function formatFileName(name: string): string {
  return name
    .replace(/\.[^/.]+$/, '') // Remove extension
    .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()); // Capitalize first letter of each word
}

function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

function getImageDimensions(url: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = url;
  });
}