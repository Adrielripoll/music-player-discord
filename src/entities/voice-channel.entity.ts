import { VoiceBasedChannel } from "discord.js";
import { 
    joinVoiceChannel, 
    VoiceConnection, 
    createAudioPlayer, 
    createAudioResource,
    AudioPlayerState
} from '@discordjs/voice'
import { IVoiceChannel } from '../interfaces/voice-channel.interface'
import { IMusicProps } from "../interfaces/music.interface";
import ytdl from 'ytdl-core'


export class VoiceChannel implements IVoiceChannel{
    private voiceChannel: VoiceBasedChannel
    private connection?: VoiceConnection

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
        this.connection = connection
        return connection
    }

    public disconnect() {

        if(!this.connection){
            throw new Error('Nenhuma conexão pré-estabelecida')
        }

        this.connection.disconnect()
    }

    public play(musics: IMusicProps[]){
        if(!this.connection){
            throw new Error('Nenhuma conexão pré-estabelecida')
        }

        const player = createAudioPlayer()
        const resource = createAudioResource(ytdl(musics[0].url))   

        player.play(resource)
        player.state

        this.connection.subscribe(player)
    }
}