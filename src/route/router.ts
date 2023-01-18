import { inject, injectable } from "tsyringe";
import { IUseCase } from "../interfaces/use-cases/use-case.interface";
import { Message } from "discord.js";
import { IRouter } from "../interfaces/router/router.interface";
import { ICommand } from "../interfaces/router/command.interface";

@injectable()
export class Router implements IRouter{

    constructor(
        @inject('Play') private play: IUseCase<Promise<Message<true | false> | undefined>>,
        @inject('Stop') private stop: IUseCase<Promise<Message<true | false>> | void>,
        @inject('Skip') private skip: IUseCase<Promise<Message<false>> | Promise<Message<true>> | undefined>
    ){}

    execute(command: string): ICommand | undefined {
    
        const commands: ICommand[] = [
            { command: 'dj!play', callback: this.play.execute },
            { command: 'dj!stop', callback: this.stop.execute },
            { command: 'dj!skip', callback: this.skip.execute }
        ]

        const action = commands.find((item: ICommand) =>item.command === command)
        return action
    }
}