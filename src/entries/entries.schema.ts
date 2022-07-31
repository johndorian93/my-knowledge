import Joi from 'joi';

export const CreateEntry = Joi.object({
    id: Joi.number().integer().required(),
    content: Joi.string().required(),
});
