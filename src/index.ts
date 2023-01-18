import 'reflect-metadata'
import './container/index'
import { config } from 'dotenv'
import { Client } from 'discord.js'
import { clientOptions } from './config'
import { AppController } from './controllers/app.controller'
import { container } from 'tsyringe'

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

const appController = container.resolve(AppController)
appController.execute(client)

client.login(process.env.BOT_TOKEN)