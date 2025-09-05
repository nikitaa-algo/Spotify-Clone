console.log('Lets write JavaScript!');


/* async function getSongs() {

    let a = await fetch("http://127.0.0.1:5500/Songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let Songs = []

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            Songs.push(element.href.split("/Songs/")[1])
        }

    }
    return Songs

}

async function main() {
    let Songs = await getSongs()
    console.log(Songs)

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of Songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img src="music.svg" alt="">
                            <div class="info">
                                <div>
                                    <p>${song.replaceAll("%20", " ")}</p>
                                    </div>
                                <div class="Playnow">
                                    <span>Play Now</span>
                                </div>
                                <img src="play.svg" alt="">
                            </div>
             </li>`;
        
    }


    var audio = new Audio(Songs[0]);
    audio.play();

    audio.addEventListener("loadeddata", () => {
        let duration = audio.duration;
        console.log(audio.duration, audio.currentSrc, audio.currentTime)
        //
    });

} 
 
main() /*