import { Router } from 'express';
import { login, register } from '../controllers/auth.controller';
const router: Router = Router();

router.get('/login', login);
router.get('/register', register);


export default router;
