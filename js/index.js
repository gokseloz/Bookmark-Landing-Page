// | mobile nav | hamburger icon | header section-accessibility | scrollDisabled | 
let hamburgerIcon = document.querySelector(".header-hamburger")
let header = document.querySelector(".header")
let body = document.querySelector("body")
let navLink = document.querySelectorAll(".header-nav-link")
let login = document.querySelector(".header-login-link")

hamburgerIcon.addEventListener("click", () => {
    header.classList.toggle("nav-active")
    body.classList.toggle("scrollDisabled")

    if (header.classList.contains("nav-active")) {
        hamburgerIcon.setAttribute("aria-expanded", "true")
        hamburgerIcon.setAttribute("aria-pressed", "true")
        navLink.forEach((e) => {
            e.setAttribute("tabindex", "0")
        })
        login.setAttribute("tabindex", "0")
    } else {
        header.setAttribute("aria-expanded", "false")
        header.setAttribute("aria-pressed", "false")
        navLink.forEach((e) => {
            e.setAttribute("tabindex", "-1")
        })
        login.setAttribute("tabindex", "-1")
    }
})


// ------------------------------
// * FAQ SECTION - ACCESSIBILITY*
// ------------------------------
let questions = [...document.querySelectorAll(".faq-question")]

questions.forEach((question) => {
    question.addEventListener("click", function () {
        this.parentElement.classList.toggle("open")
        if (this.parentElement.classList.contains("open")) {
            this.setAttribute("aria-expanded", "true")
        } else {
            this.setAttribute("aria-expanded", "false")
        }
    })
});

// --------------------
// * FEATURES SECTION *
// --------------------
let feature = [{
        imgSrc: './images/illustration-features-tab-1.svg',
        heading: 'Bookmark in one click',
        desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        altTxt: 'control panel'
    },
    {
        imgSrc: './images/illustration-features-tab-2.svg',
        heading: 'Intelligent search',
        desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        altTxt: 'quick search'
    },
    {
        imgSrc: './images/illustration-features-tab-3.svg',
        heading: 'Share your bookmarks',
        desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        altTxt: 'communicate with others'
    },
]

let featureImgWrapper = document.querySelector(".feature-imgWrapper")
let featureImg = document.querySelector(".feature-img")
let featureTextWrapper = document.querySelector(".feature-textWrapper")
let featureHeading = document.querySelector(".feature-heading")
let featureDesc = document.querySelector(".feature-desc")
let tabButtons = [...document.querySelectorAll(".tab")]

function changeTab(index) {
    tabButtons.forEach((tab) => {
        tab.classList.remove("active")
    })
    tabButtons[index].classList.add("active")

    featureImgWrapper.classList.add("animAdded")
    featureTextWrapper.classList.add("animAdded")

    setTimeout(() => {
        featureImgWrapper.classList.remove("animAdded")
        featureTextWrapper.classList.remove("animAdded")
    }, 1000);

    setTimeout(() => {
        featureImg.src = feature[index].imgSrc;
        featureImg.alt = feature[index].altTxt;
        featureHeading.textContent = feature[index].heading;
        featureDesc.textContent = feature[index].desc;
    }, 800);
}

tabButtons.forEach((tab) => {
    tab.addEventListener("click", function () {
        changeTab(tabButtons.indexOf(tab))
    })
    tab.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            e.preventDefault()
            changeTab(tabButtons.indexOf(tab))
        }
    })
});


// --------------------
// * REGISTER SECTION *
// --------------------
let registerForm = document.querySelector(".register-form")
let input = document.querySelector(".form-input")
let successText = document.querySelector(".form-success-text")
let warningText = document.querySelector(".form-warning-text")
let errorICon = document.querySelector(".form-error")

function notSubmit() {
    input.style.border = "2px solid hsl(0, 94%, 66%)"
    warningText.style.display = "block"
    errorICon.style.display = "block"
    successText.style.display = "none"
}

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (input.value == "") {
        notSubmit()

    } else {
        successText.style.display = "block"
        input.style.border = "2px solid #28a745"
        input.value = ""
        warningText.style.display = "none"
        errorICon.style.display = "none"

        setTimeout(() => {
            successText.style.display = "none"
            input.style.border = "none"
        }, 1500);
    }
})

input.addEventListener("invalid", (e) => {
    e.preventDefault()
    notSubmit()
})