// src/api/getImage.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '@/lib/postgres';

const getImage = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = await pool.query('SELECT image FROM users');
    const imageData = result.rows[0].image;
    res.status(200).json({ imageData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching image' });
  }
};

export default getImage;