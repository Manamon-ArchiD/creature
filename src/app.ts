import express from "express";
import creaturesRoutes from '@/routes/creatures.routes';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yaml';
import fs from 'fs';

const app = express();
const file  = fs.readFileSync('docs/swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

app.use(express.json());
app.use("/creatures", creaturesRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
