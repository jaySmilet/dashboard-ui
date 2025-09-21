// src/hooks/useImagePath.ts

/**
 * Returns the full image path based on Vite's public folder
 * Works in both dev and production
 */
export const useImagePath = () => {
  const getImage = (fileName: string): string => {
    return `${import.meta.env.BASE_URL}/images/${fileName}`;
  };

  return { getImage };
};
