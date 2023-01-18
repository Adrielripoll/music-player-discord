import { Message } from "discord.js";
import { ServerQueue } from "../../entities/server-queue.entity";

export interface IUseCase<T> {
    execute: (message: Message<boolean>, serverQueue: ServerQueue) => T
}