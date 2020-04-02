function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};
  
  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

/*atalhos */
document.onkeyup = function(e) {
    if (e.which == 85) {
      if(document.getElementById("mySidenav").style.width === "250px"){
        closeNav();
      }else {
        openNav();
      }
    }else if(e.which == 72){
      location.href = "index.html";
    }
    
};

document.getElementById("con1").onclick = function(){
  location.href = "classic.html";
}

document.getElementById("con2").onclick = function(){
  location.href = "gx.html";
}

document.getElementById("con3").onclick = function(){
  location.href = "5d.html";
}

document.getElementById("con4").onclick = function(){
  location.href = "zexal.html";
}

document.getElementById("con5").onclick = function(){
  location.href = "arcv.html";
}
document.getElementById("con6").onclick = function(){
  location.href = "vrains.html";
}

document.getElementById("con7").onclick = function(){
  location.href = "sevens.html";
}



//mouseover images

//1
document.getElementById("con1").onmouseover = function () {
  let style = document.createElement('style');
    style.innerHTML =`
    .c1{background-image: url("images/purpEnter1.jpg");}
    `;
    document.head.appendChild(style);
  
}

document.getElementById("con1").onmouseleave = function () {
  let style = document.createElement('style');
  style.innerHTML =`
  .c1{background-image: url("images/p1.jpg");}
  `;
  document.head.appendChild(style);
}

//2
document.getElementById("con2").onmouseover = function () {
  let style = document.createElement('style');
    style.innerHTML =`
    .c2{background-image: url("images/purpEnter2.jpg");}
    `;
    document.head.appendChild(style);
  
}

document.getElementById("con2").onmouseleave = function () {
  let style = document.createElement('style');
  style.innerHTML =`
  .c2{background-image: url("images/p2.jpg");}
  `;
  document.head.appendChild(style);
}

//3
document.getElementById("con3").onmouseover = function () {
  let style = document.createElement('style');
    style.innerHTML =`
    .c3{background-image: url("images/purpEnter3.jpg");}
    `;
    document.head.appendChild(style);
  
}

document.getElementById("con3").onmouseleave = function () {
  let style = document.createElement('style');
  style.innerHTML =`
  .c3{background-image: url("images/p3.jpg");}
  `;
  document.head.appendChild(style);
}

//4
document.getElementById("con4").onmouseover = function () {
  let style = document.createElement('style');
    style.innerHTML =`
    .c4{background-image: url("images/purpEnter4.jpg");}
    `;
    document.head.appendChild(style);
  
}

document.getElementById("con4").onmouseleave = function () {
  let style = document.createElement('style');
  style.innerHTML =`
  .c4{background-image: url("images/p4.jpg");}
  `;
  document.head.appendChild(style);
}

//5
document.getElementById("con5").onmouseover = function () {
  let style = document.createElement('style');
    style.innerHTML =`
    .c5{background-image: url("images/purpEnter5.jpg");}
    `;
    document.head.appendChild(style);
  
}

document.getElementById("con5").onmouseleave = function () {
  let style = document.createElement('style');
  style.innerHTML =`
  .c5{background-image: url("images/p5.jpg");}
  `;
  document.head.appendChild(style);
}

//6
document.getElementById("con6").onmouseover = function () {
  let style = document.createElement('style');
    style.innerHTML =`
    .c6{background-image: url("images/purpEnter6.jpg");}
    `;
    document.head.appendChild(style);
  
}

document.getElementById("con6").onmouseleave = function () {
  let style = document.createElement('style');
  style.innerHTML =`
  .c6{background-image: url("images/p6.jpg");}
  `;
  document.head.appendChild(style);
}

//7
document.getElementById("con7").onmouseover = function () {
  let style = document.createElement('style');
    style.innerHTML =`
    .c7{background-image: url("images/purpEnter7.jpg");}
    `;
    document.head.appendChild(style);
  
}

document.getElementById("con7").onmouseleave = function () {
  let style = document.createElement('style');
  style.innerHTML =`
  .c7{background-image: url("images/p7.jpg");}
  `;
  document.head.appendChild(style);
}

