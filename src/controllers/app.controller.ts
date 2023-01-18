import { Client } from "discord.js";
import { container, inject, injectable } from "tsyringe";
import { ServerQueue } from "../entities/server-queue.entity";
import { IRouter } from "../interfaces/router/router.interface";
import { Router } from "../route/router";

@injectable()
export class AppController {
    
    private serverQueue: ServerQueue

    constructor(
        @inject('Router') private router: IRouter
    ){
        this.serverQueue = new ServerQueue()
        this.router = container.resolve(Router)
    }

    public async execute(client: Client){
        client.on("messageCreate", async (message) => {
            const action = this.router.execute(message.content.split(" ")[0])

            if(!action){
                message.channel.send("Comando não encontrado")
            }

            action?.callback(message, this.serverQueue)
        })
    }
}