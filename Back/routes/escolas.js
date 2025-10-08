import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
  res.send("rota de escolas");
});

export default router;