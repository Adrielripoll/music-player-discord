import { ServerQueue } from "../entities/server-queue.entity";
import { IMusicProps } from "../interfaces/music.interface";

export class PlayService {
    static execute(serverQueue: ServerQueue, music: IMusicProps){
        if(!music){
            serverQueue.voiceChannel!.disconnect()
            serverQueue.delete()
            return;
        }

        serverQueue.voiceChannel?.play(serverQueue.musicQueue!.list())
    }
}
