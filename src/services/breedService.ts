import { getAllBreeds as getAllBreedsRepo, getBreedById as getBreedByIdRepo, getBySearch as getBySearchRepo, getImagesById as getImagesByIdService } from '../repositories/breedRepository';

export const getAllBreeds = () => {
    return getAllBreedsRepo();
}

export const getBreedById = (breed_id: string) => {
    return getBreedByIdRepo(breed_id);
}

export const getBySearch = (search: string) => {
    return getBySearchRepo(search);
}

export const getImagesById = (id: string) => {
    return getImagesByIdService(id);
}


