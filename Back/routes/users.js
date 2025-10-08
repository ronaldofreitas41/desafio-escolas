import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
  res.send("rota de usuarios");
});

export default router;