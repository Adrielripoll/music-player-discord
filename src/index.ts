import 'reflect-metadata'
import { config } from 'dotenv'
import { Client } from 'discord.js'
import { clientOptions } from './config'
import { MainController } from './controllers/main.controller'
import './modules/index'
import { PlayService } from './use-cases/play'


config()

const client = new Client(clientOptions)
client.once('ready', (client) => {
    console.log('Ready!');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});

const mainController = new MainController(new PlayService())
mainController.execute(client)

client.login(process.env.BOT_TOKEN)