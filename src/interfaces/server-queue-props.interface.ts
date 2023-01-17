import { IVoiceChannel } from "./voice-channel.interface"
import { ITextChannel } from "./text-channel.interface"
import { IMusicQueue } from "./music-queue.interface"
import { IGuild } from './guild.interface'

export interface IServerQueueProps {
    musicQueue: IMusicQueue
    guild: IGuild
    voiceChannel: IVoiceChannel
    textChannel: ITextChannel
    volume: number
    playing: boolean
}
