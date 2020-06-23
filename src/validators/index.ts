import { celebrate, Segments, Joi } from 'celebrate';

export const createPlayerValidator = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        words_typed: Joi.number().required(),
        letters_typed: Joi.number().required(),
    }),
});
