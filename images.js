var images = [
    "45.webp",
    "99.webp",
    "87.webp",
    "43.jpg"];
    

  
  var index = 0;
  
  function changeImages() {
    imageSlideShow.src = images[index];
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    setTimeout("changeImages()", 2000);
  }
  changeImages();