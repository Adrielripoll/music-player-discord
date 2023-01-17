import { injectable } from "tsyringe";
import { Message } from "discord.js";
import { MusicQueue } from "../entities/music-queue.entity";
import { Music } from "../entities/music.entity";
import { VoiceChannel } from '../entities/voice-channel.entity'
import { ServerQueue } from "../entities/server-queue.entity";
import { TextChannel } from "../entities/text-channel.entity";
import { GuildServer as Guild } from '../entities/guild.entity'
import { PlayService } from "../services/play.service";
import ytdl from 'ytdl-core'

@injectable()
export class Play {
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
        const music = new Music({
            title: musicInfo.videoDetails.title,
            url: musicInfo.videoDetails.video_url,
            duration: musicInfo.videoDetails.lengthSeconds
        })

        if(!serverQueue.value){
            const voiceChannel = new VoiceChannel(channel)
            const musicQueue = new MusicQueue()
            
            musicQueue.add(music.value)
            
            serverQueue.config({
                textChannel: new TextChannel(message.channel),
                voiceChannel,
                guild: new Guild(message.guild!),
                musicQueue,
                playing: true,
                volume: 5
            })

            try{
                voiceChannel.join()
                PlayService.execute(serverQueue, music.value)
            }catch(error){
                serverQueue.delete()
                return message.channel.send(error!)
            }
        } else {
            serverQueue.value.musicQueue?.add(music.value)
            return message.channel.send(`${music.value.title} foi adicionado à fila`)
        }

    }
}