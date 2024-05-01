const accesskey = "eheV-GhjMDDP_91zls1hhK2TMcEimZYuN42y_k51w7Q"
const searchform = document.getElementById("search-form")
const searchbox = document.getElementById("search-box")
const searchResult = document.getElementById("search-results")
const ShowMoreBtn = document.getElementById("show-more-btn")

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=18`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResult.innerHTML = ""
    }

    console.log(data);

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small;

        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image)

        searchResult.appendChild(imageLink)
    })

    ShowMoreBtn.style.display = "block"
}

searchform.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

ShowMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})
