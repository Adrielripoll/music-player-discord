import { VoiceBasedChannel } from "discord.js";
import { VoiceConnection } from '@discordjs/voice'

export interface IVoiceChannel {
    channel: VoiceBasedChannel
    connection: VoiceConnection
    join: () => VoiceConnection
    disconnect: () => void
}