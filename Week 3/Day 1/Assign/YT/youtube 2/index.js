

const API = "AIzaSyBHZdNzOjRqiIZFORHiMG54b7e8cm-Am0E";
count = 0
const searchmovies = async () => {
    count++
    try {
        const q = document.getElementById("search").value

        const res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}&key=${API}`
        )
        const data = await res.json()
        console.log(data.items)
        append(data.items)

    } catch (err) {
        console.log(err)
    }
}
if (count == 0) {
    const searchVdeos1 = async () => {


        try {
            q = "the most popular videos in India"

            const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=40&q=${q}&key=${API}`);

            const data = await res.json();
            // console.log(data.items)
            append(data.items);

        } catch (error) {
            console.log(error)
        }
    }
    searchVdeos1()
}
const append = (videos) => {



    let show_videos = document.getElementById("append");

    show_videos.innerHTML = null;

    videos.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
        let div = document.createElement("div")
        div.style.height = "fit-content"
        let ifarme = document.createElement("iframe")
        let img = document.createElement("img")
        img.src = thumbnails.high.url
        img.style.width = "100%"
        img.style.aspectRatio = "16/9"

        ifarme.allow = "fullscreen"

        let data = {
            title,
            videoId
        }

        div.onclick = () => {
            showVideo(data)
        }
        let name = document.createElement("h5")
        name.innerText = title
        div.append(img, name)
        show_videos.append(div)
    });
}

const showVideo = (x) => {

    window.location.href = "video.html"
    localStorage.setItem("video", JSON.stringify(x))
}