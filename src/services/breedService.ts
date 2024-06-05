// const BreedRepository = require('../repositories/breedRepository');
import { getAllBreeds as getAllBreedsRepo } from '../repositories/breedRepository';

export const getAllBreeds = () => {
    return getAllBreedsRepo();
}
