import { IMusicProps } from "./music.interface"

export interface IMusicQueue{
    add: (props: IMusicProps) => void,
    list: () => IMusicProps[],
    reset: () => void,
    remove: () => void,
    removeOneById: (id: string) => void | string,
}