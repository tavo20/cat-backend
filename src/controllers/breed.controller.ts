import { Request, Response } from 'express';
import { getAllBreeds as getAllBreedsService, getBreedById as getBreedByIdService, getBySearch as getBySearchService, getImagesById as getImagesByIdService } from '../services/breedService';

export const getAllBreeds = async (req: Request, res: Response) => {
  try {
    const breeds = await getAllBreedsService();

    res.json(breeds);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const getBreedById = async (req: Request, res: Response) => {
  try {
    const { breed_id } = req.params;
    const breed = await getBreedByIdService(breed_id);

    res.json(breed);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const getBySearch = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;

    const respon = await getBySearchService(q as string);

    res.json(respon);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}

export const getImagesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const images = await getImagesByIdService(id);

    res.json(images);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}