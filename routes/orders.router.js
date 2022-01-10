const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');

const OrderService = require('../services/order.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
    getOrderSchema,
    //   createOrderSchema,
    addItemSchema,
} = require('../schemas/order.schema');

const router = express.Router();
const service = new OrderService();

router.get(
    '/:id',
    validatorHandler(getOrderSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const order = await service.findOne(id);
            res.json(order);
        } catch (error) {
            next(error);
        }
    }
);

router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    async (req, res, next) => {
        const user = req.user;
        try {
            res.json({
                user
            });
            next();
        } catch (error) {
            next(boom.unauthorized('User not found'));
        }
    },
    async (req, res, next) => {
        try {
            const userId = req.user.sub;
            const newOrder = await service.create(userId);
            res.json(newOrder);
        } catch (error) {
            next(error);
        }
    }
);

router.post(
    '/add-item',
    validatorHandler(addItemSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newItem = await service.addItem(body);
            res.status(201).json(newItem);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
