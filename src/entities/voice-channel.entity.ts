import { VoiceBasedChannel } from "discord.js";
import { joinVoiceChannel, VoiceConnection } from '@discordjs/voice'
import { IVoiceChannel } from '../interfaces/entities/voice-channel.interface'

export class VoiceChannel implements IVoiceChannel {

    private voiceChannel: VoiceBasedChannel
    private voiceConnection: VoiceConnection | null = null

    constructor(voiceChannel: VoiceBasedChannel){
        this.voiceChannel = voiceChannel
    }

    public get channel(): VoiceBasedChannel {
        return this.voiceChannel
    }

    public get connection(): VoiceConnection {
        return this.connection
    }

    public join(): VoiceConnection {
        const connection = joinVoiceChannel({
            channelId: this.voiceChannel.id,
            guildId: this.voiceChannel.guildId,
            adapterCreator: this.voiceChannel.guild.voiceAdapterCreator
        })
        this.voiceConnection = connection
        return connection
    }

    public disconnect() {

        if(!this.connection){
            throw new Error('Nenhuma conexão pré-estabelecida')
        }

        this.connection.disconnect()
    }
}