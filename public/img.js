let photo = document.querySelector("#photo");
let download = document.querySelector("#download");
let photoupload = document.querySelector("#photo-upload");


photo.addEventListener("click", function(){
    photoupload.click();
})


photoupload.addEventListener("change", function(e){
    let fileObject = e.target.files[0];
    let imageUrl = URL.createObjectURL(fileObject);
    let image = document.createElement("img");
    image.src = imageUrl;
    image.classList.add("image-upload");
    appendSticky(image);
})


download.addEventListener("click", function(){
    let canvasUrl = canvas.toDataURL({type:"image/png"});
    let aTag = document.createElement("a");
    aTag.download = "canvas.png";
    aTag.href = canvasUrl;
    aTag.click();
})

