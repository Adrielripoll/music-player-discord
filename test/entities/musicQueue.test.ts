import { MusicQueue } from '../../src/entities/MusicQueue'
import { makeMusic } from '../factories/music.factory'
import { Music } from '../../src/entities/Music'

describe('Music Queue', () => {
    it('should be able to create a musics queue', () => {
        const music = makeMusic()       
        const musicQueue = new MusicQueue(music)
        console.log(musicQueue)
        expect(musicQueue).toHaveProperty('queue')
    })

    it('should be able to remove last music from queue', () => {
        const music = new Music(makeMusic({ title: 'Did I Let you Know'}))
        const music2 = new Music(makeMusic())
        const musicQueue = new MusicQueue(music.value)

        musicQueue.add(music2.value)
        musicQueue.remove()
        
        expect(musicQueue.list()).toHaveLength(1)
    })
})