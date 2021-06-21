"use strict";
// 1) По нажатию на кнопку изменить текст самой кнопки (см. innerText).

// const btnFrst = document.createElement("button");
// const btnSec = document.createElement("button");

// btnFrst.innerText = "Click";
// btnSec.innerText = "Click";

// document.body.prepend(btnFrst);
// document.body.prepend(btnSec);

// btnFrst.addEventListener("click", changeBtnText);
// btnSec.addEventListener("click", changeBtnText);

// const add = numerator();

// function changeBtnText(e) {
//   this.textContent = `${add()} Click`;
// }

// function numerator() {
//   let currentNumer = 1;
//   return () => currentNumer++;
// }

// 2) Отобразить картинку. Сделать так, что бы при появлении страницы отображалсь одна картинка, а при наведении мышью на неё отображалась другая.

// const pic = document.createElement("img");
// pic.src = "https://crosti.ru/patterns/00/04/e1/3414333a1d/preview.jpg";
// pic.style.align;
// pic.setAttribute("style", "border-radius: 10%; object-fit: cover;");
// pic.width = "600";
// pic.height = "600";
// document.body.append(pic);

// pic.addEventListener("mouseover", () => {
//   pic.src = "http://risovach.ru/upload/2013/04/mem/volk_16993738_orig_.jpeg";
// });

// pic.addEventListener("mouseout", () => {
//   pic.src = "https://crosti.ru/patterns/00/04/e1/3414333a1d/preview.jpg";
// });

// 3) Сгенерировать заданную структуру:
// <h1>Header1</h1>
// <article>
// <h2>Header2</h2>
// <div><img src="" alt=""></div>
// <p>It is paragraph</p>
// </article>
// (привязать <div id="root"></div>)

// const root = document.getElementById("root");

// const h1 = document.createElement("h1");
// h1.textContent = "Header1";
// root.append(h1);

// const article = document.createElement("article");
// root.append(article);

// const div = document.createElement("div");
// article.append(div);

// const p = document.createElement("p");
// p.append("It is paragraph");
// article.append(p);

// const h2 = document.createElement("h2");
// h2.textContent = "Header2";
// article.prepend(h2);

// div.insertAdjacentHTML("afterbegin", '<img src="#" alt=" ">');

// Advanced:
// Доделать анимацию появления следующего кадра в слайдере.
// Пример анимации на сайте внизу:
// https://pixelbuddha.net/livepreview/activebox/

const images = [
  "https://u-stena.ru/upload/iblock/9cb/9cb1acc5cefd10605ed33a4fa119894d.jpg",
  "https://trikky.ru/wp-content/blogs.dir/1/files/2019/02/17/kartinka.jpg",
  "https://pw.artfile.me/wallpaper/23-12-2012/650x440/yarkie-cveta-raznoe-tekstury-yarkost-pya-691351.jpg",
];

const imageElement = document.querySelector("img");

const [btnPrev, btnNext] = document.querySelectorAll("#sliderContainer button");
//каррирование
const btnClickHendler =
  (direction = "next") =>
  e => {
    slider.currentIndex =
      slider[direction === "next" ? "nextIndex" : "prevIndex"];
    fadeOutImg();
    setTimeout(fadeInImg, 1000);
  };

btnPrev.addEventListener("click", btnClickHendler("prev"));

btnNext.addEventListener("click", btnClickHendler());

loadImage(images[0]);

const slider = new Slider(images);

function loadImage(image) {
  imageElement.setAttribute("src", image);
}

function fadeOutImg() {
  imageElement.classList.remove("show");
  imageElement.classList.add("hide");
}

function fadeInImg() {
  imageElement.classList.remove("hide");
  imageElement.setAttribute("src", slider.currentSlide);
  imageElement.classList.add("show");
}
