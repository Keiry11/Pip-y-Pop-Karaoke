//Conexión con HTML (Seleccionar elementos)

const songForm = document.getElementById("song_form");
const playlist = document.getElementById("play_list");

//Funcion para agregar una canción a la lista

function addsong(sonName, artistName, songUrl) {
    const listSong =  document.createElement('li');   
    listSong.innerHTML = `
            <strong> ${sonName} </strong>
            -${artistName}
            <a href="${songUrl}" target="_blank">Reproducir</a>
            <button class="delete-btn" >Eliminar</button>
    `;
    //Agregar al HTML
    playlist.appendChild(listSong);

}

//Manejo de envio de formularios (eventos)

songForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtener datos del formulario
    const sonName = document.getElementById("song_name").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("url_song").value;

    addsong(sonName, artistName, songUrl);

songForm.request();

} )
