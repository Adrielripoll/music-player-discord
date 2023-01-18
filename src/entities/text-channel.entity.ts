import { Channel } from "discord.js"
import { ITextChannel } from '../interfaces/entities/text-channel.interface'

export class TextChannel implements ITextChannel {

    private textChannel: Channel

    constructor(textChannel: Channel){
        this.textChannel = textChannel
    }

    public get value(): Channel {
        return this.textChannel
    }
}