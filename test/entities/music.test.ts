import { Music } from '../../src/entities/Music'

describe('Music', () => {
    it('should be able to create a music', () => {
        const music = new Music({
            title: 'Venice Queen',
            url: 'https://www.youtube.com/watch?v=3s86rJvMIS0&ab_channel=RedHotChiliPeppers-Topic',
            duration: '6:08'
        })
        
        expect(music).toBeTruthy()
    })
})