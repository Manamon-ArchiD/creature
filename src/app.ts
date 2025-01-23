import express from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./swagger";
import creaturesRoutes from '@/routes/creatures.routes';

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
app.use("/creatures", creaturesRoutes);

export default app;
