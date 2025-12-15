import { ImageFile } from "../types";

export const generateFix = async (
  originalImage: ImageFile,
  fixDescription: string
): Promise<string> => {
  try {
    // Call the serverless API route instead of using API key directly
    // In production, this will use Vercel's API routes
    // In development, use Vercel CLI: `vercel dev` or set up the API route separately
    const apiUrl = '/api/generate-fix';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageData: originalImage.data,
        mimeType: originalImage.mimeType,
        fixDescription: fixDescription,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.image;

  } catch (error) {
    console.error("Error generating fix:", error);
    throw error;
  }
};