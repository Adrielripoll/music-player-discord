import { Message } from "discord.js";
import { ServerQueue } from "../entities/server-queue.entity";
import { IUseCase } from "../interfaces/use-cases/use-case.interface";
import { CreatePlayer } from "../services/createPlayer.service";

export class Stop implements IUseCase<Promise<Message<true | false>> | void> {
    execute(message: Message<boolean>, serverQueue: ServerQueue){
        const channel = message.member?.voice.channel

        if(!channel){
            return message.channel.send("Você não está em nenhum canal de voz 🤪")
        }

        if(!serverQueue.musicQueue?.list()){
            return message.channel.send("Não há nenhuma música na fila")
        }

        const audio = CreatePlayer.getInstance
        audio.player.stop()
        serverQueue.voiceChannel!.disconnect()
        serverQueue.delete()
    }
}