import { Request, Response } from 'express';
// const breedService = require('../services/breedService');
import { getAllBreeds as getAllBreedsService } from '../services/breedService';

export const getAllBreeds = async (req: Request, res: Response) => {
    try {
        const breeds = await getAllBreedsService();
        
        res.json(breeds);
      } catch (error: any) {
        res.status(500).json({ error: error.message });
      }
}