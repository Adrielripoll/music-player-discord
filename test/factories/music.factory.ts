interface IMusicProps {
    title: string,
    url: string,
    duration: string
}

type IMusicFactorie = Partial<IMusicProps>

export function makeMusic(data: IMusicFactorie = {}){
    return {
        title: 'Wet Sand',
        url: "https://www.youtube.com/watch?v=oabjND9QW8Q&ab_channel=RedHotChiliPeppers-Topic",
        duration: "5:10",
        ...data,
    }
}