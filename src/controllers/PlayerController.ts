import { Request, Response } from 'express';
import { Player } from '../schemas/Player';

class PlayerController {
    async store(request: Request, response: Response) {
        const {
            words_typed = '',
            letters_typed = '',
            name = '',
        } = request.body;

        try {
            const player = await Player.create({
                words_typed,
                letters_typed,
                name,
            });

            return response.status(201).json(player);
        } catch (err) {
            return response.status(500).json({
                message: 'internal server error',
                err,
            });
        }
    }

    async index(request: Request, response: Response) {
        try {
            const topPlayers = await Player.find()
                .sort({ words_typed: 'desc' })
                .limit(5);

            return response.json(topPlayers);
        } catch (err) {
            return response.status(500).json({
                message: 'internal server error',
                err,
            });
        }
    }
}

export default new PlayerController();
