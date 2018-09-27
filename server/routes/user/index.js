import { Router } from 'express';
import { signupMid, signinMid } from '../../middleware/user';

const router = Router();

router.post('/signup', signupMid);
router.post('/signin', signinMid);

export default router;
