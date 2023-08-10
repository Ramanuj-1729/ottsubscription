import Joi from 'joi';
import { Plans } from '../models';

const plansController = {
    async createPlans(req, res, next) {
        const plansSchema = Joi.object({
            title: Joi.string().required(),
            duration: Joi.string().required(),
            price: Joi.number().required(),
            quality: Joi.string().required(),
            resolution: Joi.string().required(),
            devices: Joi.array().default([]).required()
        });
        const { error } = plansSchema.validate(req.body);
        if (error) {
            return next(error);
        }

        const { title, duration, price, quality, resolution, devices } = req.body;

        // prepare the model
        const plan = new Plans({
            title,
            duration,
            price,
            quality,
            resolution,
            devices
        });

        try {
            const result = await plan.save();
        } catch (err) {
            return next(err);
        }

        res.json(plan);
    },

    async getAllPlans(req, res, next) {
        try {
            let plans = await Plans.find();
            res.status(200).json(plans);
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },

    async getMonthlyPlans(req, res, next) {
        try {
            let monthlyPlans = await Plans.find({duration: 'Monthly'}).select('-createdAt -updatedAt -__v');
            res.status(200).json(monthlyPlans);
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },

    async getYearlyPlans(req, res, next) {
        try {
            let yearlyPlans = await Plans.find({duration: 'Yearly'}).select('-createdAt -updatedAt -__v');
            res.status(200).json(yearlyPlans);
        } catch (err) {
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
        }
    },
}

export default plansController;