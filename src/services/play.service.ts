import { injectable } from "tsyringe";
import { Message } from "discord.js";
import { MusicQueue } from "../entities/music-queue.entity";
import { Music } from "../entities/music.entity";
import { VoiceChannel } from '../entities/voice-channel.entity'
import { ServerQueue } from "../entities/server-queue.entity";
import { TextChannel } from "../entities/text-channel.entity";
import { GuildServer as Guild } from '../entities/guild.entity'
import ytdl from 'ytdl-core'

@injectable()
export class PlayService {
    async execute(message: Message<boolean>, serverQueue: ServerQueue){
        const args = message.content.split(" ")
        const channel = message.member?.voice.channel

        if(!channel){
            return message.channel.send("Você precisa estar em um canal de voz para tocar música 🤪")
        }

        const permissions = channel.permissionsFor(message.client.user)

        if(!permissions?.has("Connect") || !permissions.has("Speak")){
            return message.channel.send("Eu preciso de permissão para entrar e falar no seu canal de voz ")
        }

        const musicInfo = await ytdl.getInfo(args[1])
        
        if(!serverQueue){
            const voiceChannel = new VoiceChannel(channel)
            const musicQueue = new MusicQueue()
            const music = new Music({
                title: musicInfo.videoDetails.title,
                url: musicInfo.videoDetails.video_url,
                duration: musicInfo.videoDetails.lengthSeconds
            })
            musicQueue.add(music.value)
            
            new ServerQueue().config({
                textChannel: new TextChannel(message.channel),
                voiceChannel,
                connection: null,
                guild: new Guild(message.guild!),
                musicQueue,
                playing: true,
                volume: 5
            })
        }

    }
}