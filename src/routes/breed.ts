import { Router } from 'express';
const router: Router = Router();

// const breedController = require('../controllers/breed.controller');
import { getAllBreeds } from '../controllers/breed.controller';


router.get('/breeds', getAllBreeds);


export default router;
