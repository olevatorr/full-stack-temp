import express from 'express';
import { logger } from './middlewares/loggerMiddleware';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

// 中介軟件
app.use(express.json());
app.use(logger);

// 路由
app.use('/api', routes);

// 啟動服務
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
