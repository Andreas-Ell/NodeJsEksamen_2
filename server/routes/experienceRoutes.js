import { Router } from 'express';
import pool from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM experiences');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});

export default router;