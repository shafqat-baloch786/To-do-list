import {main} from '../controllers/controller.js';

import express from 'express';
const app = express();
const router = express.Router();

router.route('/home').get(main);

export default router;