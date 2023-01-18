import { Message } from "discord.js";
import { ServerQueue } from "../entities/server-queue.entity";
import { IUseCase } from "../interfaces/use-cases/use-case.interface";
import { CreatePlayer } from "../services/createPlayer.service";
import { PlayService } from "../services/play.service";

export class Skip implements IUseCase<Promise<Message<false>> | Promise<Message<true>> | undefined> {
    execute(message: Message<boolean>, serverQueue: ServerQueue) {
        const channel = message.member?.voice.channel

        if(!channel){
            return message.channel.send("Você não está em nenhum canal de voz")
        }

        const queue = serverQueue.musicQueue
        
        if(!queue){
            return message.channel.send('Não tem mais nenhuma música na fila')    
        }

        queue.remove()

        const audio = CreatePlayer.getInstance
        audio.player.stop()

        PlayService.execute(serverQueue)
    };
}