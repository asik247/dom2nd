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
    if (image.getAttribute("src") === "/assest/cat.jpg") {
        image.setAttribute("src", "/assest/dog.jpg")
    } else {
        image.setAttribute("src", "/assest/cat.jpg")

    }

}
// Inner html added code here now
// let boxDiv = document.getElementById("box");
// boxDiv.innerHTML = "<h1>js boss</h1>";
// boxDiv.innerHTML = "<p>This is paragraph tag</p>";
// boxDiv.innerHTML = "<li>This is paragraph tag</li>";
// console.log(boxDiv);


// Task for me
let textChange = document.getElementById("textChange");
// console.log(textChange);
textChange.addEventListener("click", function () {
    // console.log("btn clicked");
    let head2 = document.getElementById("head2");
    // console.log(head2);
    head2.innerText = "Js Text Now:-"
})
// Tommorow Topic code here now:
// Adding a Css Class:
function list  ()  {
    let torrm = document.getElementById("torrm");
    console.log(torrm);
    torrm.classList.add("tommorow")

}
// Removing a css class style
let removed = document.getElementById("removed");
removed.addEventListener("click",function(){
    // console.log("btn Clicked now");
    let para = document.querySelector(".para2");
    // console.log(para);
    para.classList.remove("para2")
})