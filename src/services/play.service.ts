import { ServerQueue } from "../entities/server-queue.entity";
import { IMusicProps } from "../interfaces/entities/music-props.interface";
import { createAudioResource } from '@discordjs/voice'
import { CreatePlayer } from "./createPlayer.service";
import ytdl from 'ytdl-core'

export class PlayService {
    static execute(serverQueue: ServerQueue){

        const queue = serverQueue.musicQueue

        if(!queue){
            throw new Error('Nenhuma música na fila')
        }

        const music: IMusicProps = queue.list()[0]

        if(!music){
            serverQueue.voiceChannel!.disconnect()
            serverQueue.delete()
            return;
        }

        const audio = CreatePlayer.getInstance
        const resource = createAudioResource(ytdl(music.url))   

        audio.player.play(resource)
        audio.player.addListener('finish', () => {
            queue.remove()
            PlayService.execute(serverQueue)
        })
    }
}

