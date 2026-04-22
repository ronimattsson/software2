document.addEventListener('submit', async function(evt){
    evt.preventDefault();
    const value = document.querySelector("#query").value
    try{
        console.log(value)
        const response = await fetch(`https://api.tvmaze.com/search/shows?q="${value}"`);
        if (!response.ok) throw new Error("invalid input!");
        const json = await response.json();
        console.log("result", json)
    } catch (e) {
        console.log("error", e);
    }
})