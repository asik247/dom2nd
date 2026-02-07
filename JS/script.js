let head = document.getElementById("head");
//  console.log(head.style.color='blue');
//  GetAttribute code here now:
let image = document.getElementById("catImg");
let src = image.getAttribute('src')
// console.log(src);


// set Attribue code
let setAtt = () => {
    // console.log("btn clicked");
    let image = document.getElementById("catImg");
    if(image.getAttribute("src")==="/assest/cat.jpg"){
         image.setAttribute("src", "/assest/dog.jpg")
    }else{
         image.setAttribute("src", "/assest/cat.jpg")

    }
   
}
// Inner html added code here now
let boxDiv = document.getElementById("box");
boxDiv.innerHTML = "<h1>js boss</h1>";
console.log(boxDiv);


