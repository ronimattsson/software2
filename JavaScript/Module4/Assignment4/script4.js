document.addEventListener('submit', async function(evt){
    evt.preventDefault();
    const value = document.querySelector("#query").value
    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q="${value}"`);
        if (!response.ok) throw new Error("invalid input!");
        const json = await response.json();
        console.log("result", json)

        let target = document.querySelector("#results")
        target.innerHTML = ""
        for (let result of json) {
            let article = document.createElement("article");
            let url = document.createElement("a");
            let image = document.createElement("img");
            let summary = document.createElement("div");
            let header = document.createElement("h2")
            .appendChild(document.createTextNode(`${result["show"]["name"]}`));

            url.setAttribute("href", result["show"]["url"])
            url.setAttribute("target", "_blank")
            image.setAttribute("src", result.show.image?.medium)
            image.setAttribute("alt", result["show"]["name"])
            url.appendChild(image)

            summary.innerText = result["show"]["summary"]

            article.appendChild(header)
            article.appendChild(url)
            article.appendChild(summary)
            target.appendChild(article)
        }

    } catch (e) {
        console.log("error", e);
    }
})