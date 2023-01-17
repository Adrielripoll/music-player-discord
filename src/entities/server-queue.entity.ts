import { IServerQueueProps } from '../interfaces/server-queue-props.interface'

export class ServerQueue {
    private props: Partial<IServerQueueProps>

    constructor(){ 
        this.props = {}
    }

    public get value(): Partial<IServerQueueProps>{
        return this.props
    }

    public get musicQueue(){
        return this.props.musicQueue
    }

    public get guild(){
        return this.props.guild
    }

    public get voiceChannel(){
        return this.props.voiceChannel
    }

    public get textChannel(){
        return this.props.textChannel
    }

    public get volume(){
        return this.props.volume
    }

    public get playing(){
        return this.props.volume
    }
    
    public config(props: IServerQueueProps){
        this.props = props
    }
    
    public delete(){
        this.props = {}
    }
}