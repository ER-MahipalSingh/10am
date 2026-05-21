window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").style.display = "block";
  }, 3000);
});

function countFun() {
  let count = 0;
  const countEle = document.getElementById("count");

  const countVld = setInterval(() => {
    count++;
    countEle.innerHTML = count;
    if (count === 5) {
      clearInterval(countVld);
    }
  }, 1000);
}
countFun();

const slide = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg",
  },
  {
    id: 2,
    image:
      "https://ik.imagekit.io/serenity/ByteofDev/Blog_Content_Images/tr:f-jpg/speed_up_images_original_R8oje17ew",
  },
  {
    id: 3,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdPFA6r_IbzQJcyXrKT5TSritv0S_iWwFmw&s",
  },
];

function slideShow() {
  let index = 0;
  const box = document.getElementById("box");

  setInterval(() => {
    box.innerHTML=""
    const img = document.createElement("img");
    img.src = slide[index].image;
    box.appendChild(img);
    index = (index + 1) % slide.length
  }, 2000);
}
slideShow();
