console.log("page loading...");

var likes = [10, 10, 10];
var spans = [
    document.querySelector("#like-1"),
    document.querySelector("#like-2"),
    document.querySelector("#like-3")
];

function like(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}