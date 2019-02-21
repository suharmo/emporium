var angle = 0;

function galleryspinL(img) {
    let el = window.getComputedStyle(img, null);
    // let st = el.getPropertyValue("transform");
    spinner = document.querySelector("#spinner");
    angle = angle + 45;
    spinner.setAttribute("style", "-webkit-transform: rotateX(" + angle + "deg); -ms-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

function galleryspinR(img) {
    let el = window.getComputedStyle(img, null);
    // let st = el.getPropertyValue("transform");
    spinner = document.querySelector("#spinner");
    angle = angle - 45;
    spinner.setAttribute("style", "-webkit-transform: rotateX(" + angle + "deg); -ms-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

let body = document.getElementsByTagName('body')[0];
let darker = document.querySelectorAll('[data-dark]');

function darkerFun() {
    let d = darker.getAttribute
    if (d === 'darker') {
        console.log('inside')
        darker.style.color = 'darkgray!important';
        darker.style.backgroundColor = 'darkgray!important';
    }
}

//-------------------------------------------------------------------------------------------
let dark = document.querySelectorAll('.dark');
let light = document.querySelectorAll('.light');
let gray = document.querySelectorAll('.gray');
let grayL = document.querySelectorAll('.grayL');
let colors = ['#1b1e20', 'white', '#343a40',"#f8f9fa", '#d1c1a1', '#f3f3f3', "#c55a59", "#454a4e", "linear-gradient(#1b1e20,  #c55a59)"]
let lightG = document.getElementsByClassName('lightG');
let shadeTop = document.getElementsByClassName('shadeTop')[0];
let shadeDown = document.getElementsByClassName('shadeDown')[0];
let carousel = document.getElementById('carousel');
let discover = document.getElementsByClassName('discover')[0];
let arrowL = document.getElementsByClassName('arrowL')[0];
let velvet = document.getElementsByClassName('velvet')[0];


function changeTheme(btn) {
    if (btn.value === "dark") {
        dark.forEach(function (el) {
            el.style[el.dataset.dark] = colors[1];
            el.style.transition = "all 2s"
        })
        light.forEach(function (el) {
            el.style[el.dataset.dark] = colors[0];
            el.style.transition = "all 2s"
        })
        gray.forEach(function (el) {
            el.style[el.dataset.dark] = colors[1];
            el.style.transition = "all 2s"
        })
        grayL.forEach(function (el) {
            el.style[el.dataset.dark] = colors[5];
            el.style.transition = "all 2s"
        })
        // lightG[0].style[lightG[0].dataset.dark] = colors[7];
        lightG[0].style.transition = "all 2s"
        // shadeTop.style.transition = "all 2s"
        carousel.style.background = 'linear-gradient(to right, #1b1e20,  #c55a59)';
        discover.style.borderBottom = '15px solid #1b1e20';
        arrowL.style.color = '#c55a59';
        velvet.style[velvet.dataset.dark] = "#555758";
        let intro = document.getElementById('intro');
        intro.style.opacity = "0"
        intro.style.height = "0"
        intro.style.transition = 'all 2s'
        shadeDown.style.opacity = "1"
        shadeDown.style.height = "auto"
        shadeDown.style.transition = "all 2s";
       
    } else if (btn.value === "light") {
        dark.forEach(function (el) {
            el.style[el.dataset.dark] = colors[0];
            el.style.transition = "all 2s"
        })
        light.forEach(function (el) {
            el.style[el.dataset.dark] = colors[3];
            el.style.transition = "all 2s"
        })
        gray.forEach(function (el) {
            el.style[el.dataset.dark] = colors[1];
            el.style.transition = "all 2s"
        })
        grayL.forEach(function (el) {
            el.style[el.dataset.dark] = "lightgray";
            el.style.transition = "all 2s"
        })
        lightG[0].style.transition = "all 2s"
        carousel.style.background = colors[1];
        discover.style.borderBottom = 'none';
        arrowL.style.color = colors[2];
        velvet.style[velvet.dataset.dark] = colors[6];
        shadeDown.style.opacity = "0"
        shadeDown.style.height = "0"
        shadeDown.style.transition = "all 4s";
        intro.style.opacity = "1"
        intro.style.height = "auto"
        intro.style.transition = 'all 2s'
        let home = document.getElementsByClassName('dark')[1];
        home.style.color = '#343a40'
    }
}