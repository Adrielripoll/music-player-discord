import { VoiceBasedChannel } from "discord.js";
import { VoiceConnection } from '@discordjs/voice'

export interface IVoiceChannel {
    value: VoiceBasedChannel,
    join: () => VoiceConnection
}