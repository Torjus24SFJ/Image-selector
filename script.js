// document.getElementById("select_img").addEventListener(change, function () {
//   const imageSelector = {
//     image1: "./images/norway.png",
//     image1: "./images/sweden.png",
//     image1: "./images/danmark.png",
//     image1: "./images/finland.png",
//     image1: "./images/iceland.png",
//   };

//   selectedValue = this.value;
//   imageElement = document.getElementById("image-selector");

//   if (imageSelector[selectedValue]) {
//     imageElement.src = imageSelector[selectedValue];
//     imageElement.style.display = "block";
//   } else {
//     imageElement.style.display = "none";
//   }
// });


document.getElementById('select_img').addEventListener("click", choseImage())

function choseImage() 
{
  const imageObject = {
    image1: "./images/norway.png",
    image1: "./images/sweden.png",
    image1: "./images/danmark.png",
    image1: "./images/finland.png",
    image1: "./images/iceland.png",
  };

  selectedImage = this.value;
  imageElement = document.getElementById('image-selector')

  if (imageObject[selectedImage])
    {
        imageElement.src = imageObject[selectedImage];
        imageElement.style.display = "block";
    }
    else 
    {
        imageElement.style.display = "none";
    }
}
