import { Router } from 'express';
import {createPlayerValidator} from "./validators";
import PlayerController from "./controllers/PlayerController";

const routes = Router();

routes.post('/players', createPlayerValidator, PlayerController.store);
routes.get('/players', PlayerController.index);

export default routes;
