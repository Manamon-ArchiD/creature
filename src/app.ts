import express from "express";
import creaturesRoutes from '@/routes/creatures.routes';

const app = express();

app.use(express.json());
app.use("/creatures", creaturesRoutes);

export default app;
