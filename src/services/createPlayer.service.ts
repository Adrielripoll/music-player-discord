import { AudioPlayer, createAudioPlayer } from "@discordjs/voice"

export class CreatePlayer {
    
    private static instance: CreatePlayer
    private audioPlayer: AudioPlayer = createAudioPlayer()

    public static get getInstance(){
        if(!CreatePlayer.instance){
            CreatePlayer.instance = new CreatePlayer()
        }

        return CreatePlayer.instance
    }

    public get player(): AudioPlayer{
        return this.audioPlayer
    }
}