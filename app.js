import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import routes  from './routes/route.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT;

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const views = path.join(__dirname, 'views');
console.log(views);

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', views);

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
})

