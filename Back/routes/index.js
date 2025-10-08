import express from 'express'
import escolasRoutes from './escolas.js'
import userRoutes from './users.js'
import loginRoutes from './login.js'

const router = express.Router();

router.use('/users',userRoutes);
router.use('/escolas',escolasRoutes);
router.use("/login",loginRoutes)


export default router;
