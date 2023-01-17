import { container } from 'tsyringe'
import { PlayService } from '../services/play.service'

container.registerSingleton<PlayService>('PlayService', PlayService)