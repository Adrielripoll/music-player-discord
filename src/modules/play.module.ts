import { container } from 'tsyringe'
import { PlayService } from '../use-cases/play'

container.registerSingleton<PlayService>('PlayService', PlayService)