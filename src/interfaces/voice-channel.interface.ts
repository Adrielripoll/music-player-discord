import { VoiceBasedChannel } from "discord.js";
import { VoiceConnection } from '@discordjs/voice'
import { IMusicProps } from "./music.interface";

export interface IVoiceChannel {
    value: VoiceBasedChannel
    join: () => VoiceConnection
    disconnect: () => void
    play: (musics: IMusicProps[]) => void
}