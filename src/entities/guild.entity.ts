import { IGuild } from "../interfaces/entities/guild.interface";
import { Guild } from "discord.js";

export class GuildServer implements IGuild {
    private guild: Guild

    constructor(guild: Guild){
        this.guild = guild
    }

    public get id(): string {
        return this.guild.id
    }
}