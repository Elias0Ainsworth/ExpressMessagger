import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRouter from './routes/auth/auth-router.js'
import userRouter from './routes/user/user-router.js'
import messageRouter from './routes/message/message-router.js'
import roomRouter from './routes/room/room-router.js'
import userInRoomRouter from './routes/user-in-room/user-in-room-router.js'

const PORT = process.env.PORT | 3001;

const app = express();

app.use(express.static('static'));
app.use(cors());
app.use(helmet());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/api/', authRouter)
app.use('/api/', userRouter)
app.use('/api/', messageRouter)
app.use('/api/', roomRouter)
app.use('/api/', userInRoomRouter)

app.listen(PORT, () => {
    console.log(`Application is running on: ${PORT}`);
})

export default app;