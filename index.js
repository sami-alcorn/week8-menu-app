//song class to add a song's name and the artist, so the song can be added to a playlist
class Song {
    constructor(name, artist) {
        this.name = name
        this.artist = artist
    }
}
//playlist class to name the playlist and create an array that holds the songs of that playlist 
class Playlist {
    constructor(name) {
        this.name = name
        this.songs = []
    }
}
//menu class for main menu options and functions to make the options work
class Menu {
    constructor() {
        this.playlists = []
        this.selectedPlaylist = null
    }
    start() {
        let selection = this.showMainMenuOptions()
        // while loop for switch statement to stay on menu as lons as user doesn't select 0 to exit
        // different cases for each option of the menu
        while (selection !=  0) {
            switch(selection) {
                case '1': 
                    this.createPlaylist()
                    break;
                case '2':
                    this.editPlaylist()
                    break;
                case '3':
                    this.viewPlaylist() 
                    break;
                case '4':
                    this.deletePlaylist()
                    break;
                case '5':
                    this.displayPlaylists()
                    break;
                default: 
                    selection = 0              
            }
            selection = this.showMainMenuOptions()    
        } 
        //alert user sees when they exit the menu by inputting 0
        alert('See you later!')
    }
    //function that shows use what the main menu options are
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new playlist
        2) edit playlist
        3) view playlist
        4) delete playlist
        5) display all playlists
        `)
    }
    //funtion that shows what the playlist menu options are
    showPlaylistMenuOptions(playlistInfo) {
        return prompt(`
        0) back
        1) add song
        2) delete song
        ${playlistInfo}
        `)
    }
    //function that prompts use for name of playlist then pushes new playlist to array of playlists
    createPlaylist() {
        let name = prompt('Give your playlist a name:')
        this.playlists.push(new Playlist(name))
        
    }
    //function that prompts user which playlist they want to edit the gives playist menu options of add or delete song
    editPlaylist() {
        let index = prompt('Enter the index of the playlist you want to edit:')
        if (index > -1 && index < this.playlists.length) {
            this.selectedPlaylist = this.playlists[index]  
            let description = 'Playlist Name: ' + this.selectedPlaylist.name + '\n'   

        let selection = this.showPlaylistMenuOptions(description) 
        //while loop for switch so the playlist menu stays up after adding or deleting a song unless user selects 0
        while (selection != 0) {
            switch (selection) {
                case '1': this.addSong()
                break;
                case '2': this.deleteSong()
               
                }
                selection = this.showPlaylistMenuOptions(description)
        }
        }
    }
    //function that asks user which playlist to view then shows the name of the playlist and the songs on it
    viewPlaylist() {
        let index = prompt('Enter the index of the playlists you want to view:')
        if (index > -1 && index < this.playlists.length) {
            this.selectedPlaylist = this.playlists[index]
            let description = ''
            for (let i = 0; i < this.selectedPlaylist.songs.length; i++) {
                description += i + ') ' + this.selectedPlaylist.songs[i].name + ' by ' + this.selectedPlaylist.songs[i].artist + '\n'
            }
            alert(`Playlist Name: ${this.selectedPlaylist.name}
${description}`)
        }
    }
    //function that prompts for name of the song and the artist then pushes a song to the selected playlist
    addSong() {
        let name = prompt('Enter the name of the song you would like to add:')
        let artist = prompt('Enter the name of the artist the song is by:')
        this.selectedPlaylist.songs.push(new Song(name, artist))
    }
    //function that asks user which song they wanted deleted from the playlist then deletes that song from array of songs
    deleteSong() {
        let index = prompt('Enter the index of the song you would like to delete:')
        if (index > -1 && index < this.selectedPlaylist.songs.length) {
            this.selectedPlaylist.songs.splice(index, 1)
        }
    }
    // function that asks users which playlist they want to delete then deletes it from the array of playlists
    deletePlaylist() {
        let index = prompt('Enter the index of the playlist you would like to delete:')
        if (index > -1 && index < this.playlists.length) {
            this.playlists.splice(index, 1)
        }
    }
    //function that shows list of all the playlists
    displayPlaylists() {
        let playlistsString = ''
        for (let i = 0; i < this.playlists.length; i++) {
            playlistsString += i + ') ' + this.playlists[i].name + '\n'
        }
        alert(playlistsString)
    }
}
let menu = new Menu()
menu.start()






/*for viewing describe() {
        return `${this.artist} plays music in the ${this.genre} genre.`
    }*/


// add new music, push this.artist to artists array, push this.genre to genres array
// view music by artist (alphapetical order?), view music by genre, delete artist

