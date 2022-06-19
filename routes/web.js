const express = require('express');
const routes = express();
const userRouter = require("./users");

/**
 * @swagger
 * /:
 *   get:
 *     summary: only home
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: just home
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 */

routes.get('/', (req, res) => {
    res.send('Hello World Express');
});
routes.use('/users', userRouter);



module.exports = routes;
