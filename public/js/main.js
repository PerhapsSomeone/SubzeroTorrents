const searchPirateBay = (term) => {
    return fetch("api/thepiratebay.php?q=" + term)
        .then((res) => { return res.json() })
        .then((res) => {
            console.log(res);
            return res;
        });
};

const search = (term) => {
    document.getElementById("resDiv").innerHTML = "<div class=\"multi-spinner-container\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"> <div class=\"multi-spinner\"></div> </div> </div> </div> </div> </div> </div>";
    searchPirateBay(term)
        .then((res) => {
            document.getElementById("resDiv").innerHTML = "";
            res.forEach((el) => {
                document.getElementById("resDiv").innerHTML += `<p>[TBP] - ${ el.title } <a style="float: right; margin-left: 10px" href="${ el.magnet }">Magnet link</a><span style="float: right">${ el.size }</span> </p><hr />`;
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