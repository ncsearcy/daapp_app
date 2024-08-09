'use server';
// src/components/getSessionData.tsx
import { useState, useEffect } from 'react';

const useGetSessionData = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/getImage');
        const data = await response.json();
        setImageData(data.imageData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, []);

  return imageData;
};

export default useGetSessionData;