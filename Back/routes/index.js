import express from 'express'
import escolasRoutes from './escolas.js'
import userRoutes from './users.js'

const router = express.Router();

router.use('/users',userRoutes);
router.use('/escolas',escolasRoutes);


export default router;
