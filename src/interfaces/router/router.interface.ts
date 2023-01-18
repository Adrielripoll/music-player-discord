import { ICommand } from "./command.interface"

export interface IRouter {
    execute(command: string): ICommand | undefined
}