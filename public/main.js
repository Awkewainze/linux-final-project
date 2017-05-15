function httpGetAsync(theUrl, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

function updateCats(cats){
    for(var i = 1; i < 7; i++){
        let pre = "http://lxgroup-httpd";
        var image = document.getElementById(`cat${i}img`);
        var desc = document.getElementById(`cat${i}desc`);
        image.src = pre + cats[i-1]["filepath"];
        desc.innerHTML = cats[i-1]["description"];
    }
}

function populateCats(){
    httpGetAsync("/cats", (response)=>{
        console.log(response);
        response = JSON.parse(response);
        updateCats(response.data);
    });
}

$(document).ready(()=>{
    populateCats();
})
