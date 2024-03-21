import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const PORT = process.env.PORT | 3001;

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.listen(PORT, () => {
    console.log(`Application is running on: ${PORT}`);
})