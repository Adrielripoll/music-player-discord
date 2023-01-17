import { IServerQueueProps } from '../interfaces/server-queue-props.interface'

export class ServerQueue {
    private props: Partial<IServerQueueProps>

    constructor(){ 
        this.props = {}
    }

    public config(props: IServerQueueProps){
        this.props = props
    }
}