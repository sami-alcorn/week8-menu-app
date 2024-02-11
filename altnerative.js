class Music {
    constructor(artist, songName) {
        this.artist = artist
        this.songName = songName
    }
}

class Playlist {
    constructor(name) {
        this.name = name
        this.songs = []
    }
    addSong(song) {
        if (song instanceof Music) {
            this.songs.push(song)
        } else { 
            throw new error(`You can only add an instance of Music. Argument is not an instance of Music: ${song}`)
        }
       describe() 
        return `${this.name} has ${this.songs.length} songs.`
       
    }
}

class Menu {
    constructor() {
        this.musicLibrary = []
        this.playlists = []
        this.selectedPlaylist = null
    }
    start() {
        let selection = this.showMainMenuOptions()

        while (selection !=  0) {
            switch(selection) {
                case '1':
                    this.addMusic()
                    break;
                case '2':
                    this.viewLibrary()
                    break;
                case '3':    
                    this.createPlaylist()
                    break;
                case '4':
                    this.viewPlaylist() 
                    break;
                case '5':
                    this.deletePlaylist()
                    break;
                case '6':
                    this.displayPlaylists()
                    break;
                default: 
                    selection = 0              
            }
            selection = this.showMainMenuOptions()    
        } 
        alert('See you later!')
    }
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) add music to library
        2) view music library
        3) create new playlist
        4) view playlist
        5) delete playlist
        6) display all playlists
        `)
    }
    showPlaylistMenuOptions(playlistInfo) {
        return prompt(`
        0) back
        1) add song
        2) delete song
        ${playlistInfo}
        `)
    }
    createPlaylist() {
        let name = prompt('Give your playlist a name:')
        this.playlists.push(new Playlist(name))
    }

    displayPlaylists() {
        let playlistsString = ''
        for (let i = 0; i < this.playlists.length; i++) {
            playlistString += i + ') ' + this.playlists[i].name + '\n'
        }
        alert(playlistsString)
    }

    viewPlaylist() {
        let index = prompt('Enter the index of the playlists you want to view')
        if (index > -1 && index < this.playlists.length) {
            this.selectedPlaylist = this.playlists[index]
            let description = 'Playlist Name: ' + this.selectedPlaylist.name + '\n'

            for (let i = 0; i < this.selectedPlaylist.songs.length; i++) {
                description += i + ') ' + this.selectedPlaylist.songs[i].songName + this.selectedPlaylist.songs[i].artist + '\n'
            }
            let selection = this.showPlaylistMenuOptions(description) 
            switch (selction) {
                case '1': this.addSong()
                break;
                case '2': this.deleteSong()
            }
        }
    }
    addMusic() {
        let artist = prompt('Enter the name of the artist you would like to add:')
        let songName = prompt('Enter the name of the song you would like to add:')
        this.musicLibrary.push(new Music(artist, songName))
    }

    viewLibrary() {
    
        let description = 'Your Music Library: ' + '\n'
        for (let i = 0; i < this.musicLibrary.length; i++) {
            description += i + this.musicLibrary[i].artist + this.musicLibrary[i].songName + '\n'
        }
    }

    deletesong() {

    }

    addSong() {
        let name = prompt('Enter the name of the song you would like to add:')
        this.selectedPlaylist.push(name)
    }
    deletePlaylist() {
        let index = prompt

    }
}
let menu = new Menu()
menu.start()





/*for viewing describe() {
        return `${this.artist} plays music in the ${this.genre} genre.`
    }*/


// add new music, push this.artist to artists array, push this.genre to genres array
// view music by artist (alphapetical order?), view music by genre, delete artist