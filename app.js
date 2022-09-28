
let myBtn = document.getElementById("myBtn");

let content=document.getElementById("content");

function getData(){
    console.log("started getData");
    url="text.txt";
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.text();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}

console.log("Before running");
getData();
console.log("After running getData");