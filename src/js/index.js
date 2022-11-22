import "@fancyapps/ui";
import $ from "jquery";

new Swiper('.swiper', {
    slidesPerView: 4,
    loop: true,
    speed: 700,
    navigation: {
        nextEl: '.arrowRight',
        prevEl: '.arrowLeft',
    },
});

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick(){
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
}

// hamb ^^^

function serializeForm(formNode){
    const data = new FormData(formNode);
    console.log(Array.from(data.entries()))
}

function formSend(){
    alert('Ваша форма успешно отправлена!')
}

function handleFormSubmit(e){
    e.preventDefault();
    serializeForm(applicantForm);
    document.querySelector('form').reset();
    formSend();
}

const applicantForm = document.querySelector("form");
applicantForm.addEventListener('submit', handleFormSubmit);

// form value^^^

//tabs

function openTab(tabId, linkId){
    let tabContent = document.getElementsByClassName('tabs__content');

    for (let i=0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabId).style.display = "grid";
}

function setActiveLink(linkId){
    let links = document.getElementsByClassName('tabs__caption');

    for (let i=0; i < links.length; i++) {
        links[i].classList.remove('tabs__caption-active');
    }

    document.getElementById(linkId).classList.add('tabs__caption-active');
}

let haircutLink = document.getElementById('haircutLink');
let cosmetologyLink = document.getElementById('cosmetologyLink');
let manicureLink = document.getElementById('manicureLink');
let makeupLink = document.getElementById('makeupLink');
let browsLink = document.getElementById('browsLink');
let massageLink = document.getElementById('massageLink');

haircutLink.addEventListener("click", function(){openTab("haircut"); setActiveLink('haircutLink')}, false);
cosmetologyLink.addEventListener("click", function(){openTab("cosmetology"); setActiveLink('cosmetologyLink')}, false);
manicureLink.addEventListener("click", function(){openTab("manicure"); setActiveLink('manicureLink')}, false);
makeupLink.addEventListener("click", function(){openTab("makeup"); setActiveLink('makeupLink')}, false);
browsLink.addEventListener("click", function(){openTab("brows"); setActiveLink('browsLink')}, false);
massageLink.addEventListener("click", function(){openTab("massage"); setActiveLink('massageLink')}, false);

// input mask

let phonePopup = document.querySelector('.popup-input-tel');
let phoneFooter = document.querySelector('.footer-input-tel');
let maskOptions = {
    mask: '+{7}(000)000-00-00'
};
let maskPopup = IMask(phonePopup, maskOptions);
let maskFooter = IMask(phoneFooter, maskOptions);

//api fetch

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return await response.json();
  }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then((data) => {
//       console.log(data); // JSON data parsed by `response.json()` call
//     });
  


//validation forms

let popupForm = document.querySelector('#extended-form'),
    requiredFields = popupForm.querySelectorAll('.required');

popupForm.onsubmit = function(e) {
    e.preventDefault();


    requiredFields.forEach(function (input){
        console.log(input.value);
        
        if (input.value === ''){
            input.style.border = '2px solid red';
        } else {
            input.style.border = '2px solid #F8F6F7';
        }
    });


}

