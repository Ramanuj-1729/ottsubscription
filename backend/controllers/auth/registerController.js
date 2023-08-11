const Joi = require('joi') ;
const { User, RefreshToken } = require('../../models') ;
const bcrypt = require('bcrypt') ;
const JwtService = require('../../services/JwtService') ;
const CustomErrorHandler = require('../../services/CustomErrorHandler') ;
const { REFRESH_SECRET } = require('../../config') ;

const registerController = {
    async register(req, res, next) {
        const registerSchema = Joi.object({
            name: Joi.string(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        });
        const { error } = registerSchema.validate(req.body);
        if (error) {
            return next(error);
        }
        // check if user is in the database already
        try {
            const exist = await User.exists({ email: req.body.email });
            if (exist) {
                return next(CustomErrorHandler.alreadyExist('This email is already taken.'));
            }
        } catch (err) {
            return next(err);
        }
        const { name, email, password } = req.body;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // prepare the model
        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        let access_token;
        let refresh_token;
        try {
            const result = await user.save();

            // Token
            access_token = JwtService.sign({ _id: result._id });
            refresh_token = JwtService.sign({ _id: result._id }, '1y', REFRESH_SECRET);
            // database whitelist
            await RefreshToken.create({ token: refresh_token });
        } catch (err) {
            return next(err);
        }

        res.json({ access_token, refresh_token });

    }
}

module.exports = registerController;