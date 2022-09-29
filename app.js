
let myBtn = document.getElementById("myBtn");
let print=document.getElementById("content");
let content=document.getElementById("content");

function getData(){
    console.log("started getData");
    url="text.txt";
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.text();
    }).then((data)=>{
        console.log("inside second then");

        print.innerHTML=data;
        console.log(data);
    })
}

console.log("Before running");
// getData();
console.log("After running getData");

// function postData(){s

//     url = "https://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"test","salary":"123","age":"23"}'
// }