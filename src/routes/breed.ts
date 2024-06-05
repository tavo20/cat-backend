import { Router } from 'express';
const router: Router = Router();

import { getAllBreeds, getBreedById, getBySearch, getImagesById} from '../controllers/breed.controller';


router.get('/search', getBySearch);
router.get('/imagesbybreedid/:id', getImagesById);
router.get('/:breed_id', getBreedById);
router.get('/', getAllBreeds);


export default router;
