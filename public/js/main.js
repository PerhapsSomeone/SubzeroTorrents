let searches_completed = 0;

const searchPirateBay = (term) => {
    return fetch("api/thepiratebay.php?q=" + term)
        .then((res) => { return res.json() })
};

const searchYTS = (query) => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=date_added&query_term=" + encodeURIComponent(query))
        .then((data) => { return data.json() })
};

const search = (term) => {
    document.getElementById("resDiv").innerHTML = "<div id='loader'><div class=\"multi-spinner-container\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"></div> </div> </div> </div> </div> </div> </div></div>";

    searchPirateBay(term)
        .then((res) => {
            document.getElementById("loader").style = "display: none";
            res.forEach((el) => {
                document.getElementById("resDiv").innerHTML += `<p>[TBP] - ${ el.title } <a style="float: right; margin-left: 10px" href="${ el.magnet }">Magnet link</a><span style="float: right">${ el.size }</span> </p><hr />`;
            });
            searches_completed++;
        });

    searchYTS(term)
        .then((res) => {
            document.getElementById("loader").style = "display: none";

            res.data.movies.forEach((el) => {
                document.getElementById("resDiv").innerHTML += `<p>[YTS] - ${ el.title }`;
                el.torrents.forEach((torrent) => {
                    document.getElementById("resDiv").innerHTML += `<a style="float: right; margin-left: 10px" href="${ torrent.url }">${ torrent.quality } (${ torrent.size })</a> `;
                });
                document.getElementById("resDiv").innerHTML += `</p><hr />`;
            })
        });
};

const buttonSearch = () => {
    search(document.getElementById("searchBox").value);
};

function preventKey(event, expectedKey, expectedCode) {
    const code = event.which || event.keyCode;

    if (expectedKey === event.key || code === expectedCode) {
        return true;
    }
    return false;
}

document.getElementById("searchButton").addEventListener("click", buttonSearch);
document.getElementById('searchBox').addEventListener('keydown', function(event) {
    if (preventKey(event, 'Enter', 13)) {
        buttonSearch();
        event.preventDefault();
    }
});