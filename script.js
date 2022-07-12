// Configurações do menu
let btn_mobile = document.querySelector("#btn-mobile");
let hamburguer = document.querySelector("#hamburguer");
let nav = document.querySelector("#nav");

btn_mobile.addEventListener("click", () => {
	if (btn_mobile.classList.toggle("active")) {
		nav.classList.toggle("active");
	} else {
		nav.classList.remove("active");
	}
});

let menuItens = document.querySelectorAll("#menu a");

menuItens.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.returnValue == true) {
			nav.classList.remove("active");
		}
	});
});

// Configurações do menu

// Carrosel de promoções

slides.forEach((slide) => {
	// console.log(slide);
	creatSlide(slide);
});

function creatSlide(slide) {
	// Elemento onde eu quero adicionar tags
	let wrapper = document.querySelector(".swiper-wrapper");

	// Criar elementos para serem introduzidos
	let creatSlide = document.createElement("div");
	let creatSlideImage = document.createElement("img");

	// Adicionando classe
	creatSlide.classList.add("swiper-slide");
	creatSlideImage.classList.add("img");

	// Adicionando valor no elemento criado
	creatSlideImage.src = slide.img;

	// Adicionando no local desejado
	wrapper.appendChild(creatSlide);
	creatSlide.appendChild(creatSlideImage);
}
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 5500,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// Carrosel de promoções

// Grade de produtos com destaque

produtos.forEach((e) => {
	// console.log(produtos);
	criandoProdutos(e);
});

function criandoProdutos(e) {
	let grade = document.querySelector(".gradeProdu");

	let contProduto = document.createElement("section");
	let contImg = document.createElement("img");
	// let itemImg = document.createElement("img");
	let nomeProduto = document.createElement("div");
	let precoProduto = document.createElement("div");

	contProduto.classList.add("produt");
	contImg.classList.add("gradeImg");
	nomeProduto.classList.add("nomePro");
	precoProduto.classList.add("precoProd");

	contImg.src = e.prodImg;
	nomeProduto.innerHTML = e.nome;
	precoProduto.innerHTML = e.valor;

	grade.appendChild(contProduto);
	contProduto.appendChild(contImg);
	contProduto.appendChild(nomeProduto);
	contProduto.appendChild(precoProduto);
}
