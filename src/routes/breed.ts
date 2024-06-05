import { Router } from 'express';
const router: Router = Router();

// const breedController = require('../controllers/breed.controller');
import { getAllBreeds, getBreedById, getBySearch, getImagesById} from '../controllers/breed.controller';
https://api.thecatapi.com/v1/images/BkIEhN3pG

router.get('/search', getBySearch);
router.get('/imagesbybreedid/:id', getImagesById);
router.get('/:breed_id', getBreedById);
router.get('/', getAllBreeds);


export default router;
