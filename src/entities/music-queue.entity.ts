import { IMusicQueue } from "../interfaces/music-queue.interface"
import { IMusicProps  } from '../interfaces/music.interface'

export class MusicQueue implements IMusicQueue {
    
    private queue: IMusicProps[] = []

    public add(props: IMusicProps){
        this.queue.push(props)
    }
    
    public list(){
        return this.queue
    }

    public reset(){
        this.queue = []
    }

    public remove(){
        this.queue.pop()
    }

    public removeOneById(id: string){
        const music = this.queue.find((item) => item.id == id)
        if(!music){
            return 'Música não encontrada! Verifique o valor digitado'    
        }
        const index = this.queue.indexOf(music)
        this.queue.splice(index, 1)
    }
}