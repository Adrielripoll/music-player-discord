import { Client } from "discord.js";
import { PlayService } from '../use-cases/play'
import { inject, injectable } from "tsyringe";
import { ServerQueue } from "../entities/server-queue.entity";

@injectable()
export class MainController {

    private readonly prefix: string = "dj!"
    private serverQueue: ServerQueue

    constructor(
        @inject('PlayService') private playService: PlayService
    ){
        this.serverQueue = new ServerQueue()
    }

    public async execute(client: Client){
        client.on("messageCreate", async (message) => {
            if(message.content.startsWith(`${this.prefix}play`)){
                await this.playService.execute(message, this.serverQueue)
            }
        })
    }
}