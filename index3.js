function test() {
    setTimeout(() => { console.log('1') }, 0);

    console.log('2')
    console.log('3')
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

httpGetAsync("https://picsum.photos/300/200", (data) => {
    console.log(data);
    document.getElementById("img1").src = data.responseURL;
    
    httpGetAsync("https://picsum.photos/300/200", (data) => {
        console.log(data);
        document.getElementById("img2").src = data.responseURL;
    })
})
test();