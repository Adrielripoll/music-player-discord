import { VoiceBasedChannel } from "discord.js";
import { joinVoiceChannel, VoiceConnection } from '@discordjs/voice'
import { IVoiceChannel } from '../interfaces/voice-channel.interface'


export class VoiceChannel implements IVoiceChannel{
    private voiceChannel: VoiceBasedChannel

    constructor(voiceChannel: VoiceBasedChannel){
        this.voiceChannel = voiceChannel
    }

    public get value(): VoiceBasedChannel {
        return this.voiceChannel
    }

    public join(): VoiceConnection {
        const connection = joinVoiceChannel({
            channelId: this.voiceChannel.id,
            guildId: this.voiceChannel.guildId,
            adapterCreator: this.voiceChannel.guild.voiceAdapterCreator
        })

        return connection
    }
}