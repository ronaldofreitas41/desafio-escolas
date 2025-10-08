import express from 'express'


const app = express();
const router = app.router();
const escolasRoutes = require('./escolas');
const userRoutes = require('./users');

router.use('/users',userRoutes);
router.use('/users',escolasRoutes);


module.exports = router;
