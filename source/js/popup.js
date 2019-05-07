// Get the modal
var modal = document.getElementById('myModal', 'myModal1', 'myModal2', 'myModal3', 'myModal4', 'myModal5', 'myModal6');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgJ1  = document.getElementById('myImgJ1');
var imgJ2  = document.getElementById('myImgJ2');
var imgJ3  = document.getElementById('myImgJ3');
var imgJ4  = document.getElementById('myImgJ4');
var imgJ5  = document.getElementById('myImgJ5');
var imgJ6  = document.getElementById('myImgJ6');
var imgJ7  = document.getElementById('myImgJ7');
var img  = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');
var img7 = document.getElementById('myImg7');
var modalImg = document.getElementById("img01", "img02", "img03", "img04", "img05", "img06", "img07");
var captionText = document.getElementById("caption", "caption02", "caption03", "caption04", "caption05", "caption06");

imgJ1.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = this.alt;
}

imgJ2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img2.src;
    captionText.innerHTML = this.alt;
}

imgJ3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img3.src;
    captionText.innerHTML = this.alt;
}

imgJ4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img4.src;
    captionText.innerHTML = this.alt;
}

imgJ5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img5.src;
    captionText.innerHTML = this.alt;
}

imgJ6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = img6.src;
    captionText.innerHTML = this.alt;
}

// imgJ7.onclick = function(){
//     modal.style.display = "block";
//     modalImg.src = img5.src;
//     captionText.innerHTML = this.alt;
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-portfolio")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
