import { container } from 'tsyringe'
import { Message } from "discord.js";

import { Play } from '../use-cases/play'
import { Stop } from '../use-cases/stop'
import { Skip } from '../use-cases/skip'

import { Router } from '../route/router';

import { IUseCase } from '../interfaces/use-cases/use-case.interface'
import { IRouter } from '../interfaces/router/router.interface';

// use-cases
container.registerSingleton<IUseCase<Promise<Message<true | false> | undefined>>>('Play', Play)
container.registerSingleton<IUseCase<Promise<Message<true | false>> | void>>('Stop', Stop)
container.registerSingleton<IUseCase<Promise<Message<false>> | Promise<Message<true>> | undefined>>('Skip', Skip)

// router
container.registerSingleton<IRouter>('Router', Router)