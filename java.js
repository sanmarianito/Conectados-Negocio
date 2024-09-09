document.querySelectorAll(".item img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-image").style.display = "flex";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

document.querySelector(".popup-image span").onclick = () =>{
    document.querySelector(".popup-image").style.display = "none";
}