import { randomUUID } from 'crypto'
import { IMusicProps } from '../interfaces/entities/music-props.interface'

export class Music {
    private props: IMusicProps

    constructor(props: IMusicProps){
        this.props = {...props, id: randomUUID()}
    }

    public get value(): IMusicProps{
        return this.props
    }
}