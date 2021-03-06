// | mobile nav | hamburger icon | header section-accessibility | scrollDisabled | 
let hamburgerIcon = document.querySelector(".header-hamburger")
let header = document.querySelector(".header")
let body = document.querySelector("body")
let nav = document.querySelector(".header-nav")
let navLink = document.querySelectorAll(".header-nav-link")
let navSocialLink = document.querySelectorAll(".nav-social-link")
let login = document.querySelector(".header-login-link")

if (window.innerWidth < 800) {
    navLink.forEach(link => link.setAttribute("tabindex", "-1"))
    login.setAttribute("tabindex", "-1")
}

hamburgerIcon.addEventListener("click", () => {
    header.classList.toggle("nav-active")
    body.classList.toggle("scrollDisabled")

    hamburgerIcon.getAttribute("aria-expanded") === "false" ? hamburgerIcon.setAttribute("aria-expanded", "true") : hamburgerIcon.setAttribute("aria-expanded", "false")
    hamburgerIcon.getAttribute("aria-pressed") === "false" ? hamburgerIcon.setAttribute("aria-pressed", "true") : hamburgerIcon.setAttribute("aria-pressed", "false")

    if (header.classList.contains("nav-active")) {
        navLink.forEach(link => link.setAttribute("tabindex", "0"))
        login.setAttribute("tabindex", "0")
    } else {
        navLink.forEach(link => link.setAttribute("tabindex", "-1"))
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
        this.getAttribute("aria-expanded") === "false" ? this.setAttribute("aria-expanded", "true") : this.setAttribute("aria-expanded", "false")
    })
});

// --------------------
// * FEATURES SECTION *
// --------------------
let feature = [{
        imgSrc: './images/illustration-features-tab-1.svg',
        heading: 'Bookmark in one click',
        desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        altTxt: 'control panel',
        id: "simple"
    },
    {
        imgSrc: './images/illustration-features-tab-2.svg',
        heading: 'Intelligent search',
        desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        altTxt: 'quick search',
        id: "quick"
    },
    {
        imgSrc: './images/illustration-features-tab-3.svg',
        heading: 'Share your bookmarks',
        desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        altTxt: 'communicate with others',
        id: "easy"
    },
]

let featureImgWrapper = document.querySelector(".feature-imgWrapper")
let featureImg = document.querySelector(".feature-img")
let featureTextWrapper = document.querySelector(".feature-textWrapper")
let featureHeading = document.querySelector(".feature-heading")
let featureDesc = document.querySelector(".feature-desc")
let tabButtons = [...document.querySelectorAll(".tab")]

function changeTab(index) {
    tabButtons.forEach(tab => {
        tab.classList.remove("active")
        tabButtons.forEach(tab => tab.setAttribute("aria-selected", "false"))
    })
    tabButtons[index].classList.add("active")
    tabButtons[index].setAttribute("aria-selected", "true")

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
        featureHeading.id = feature[index].id
        featureDesc.textContent = feature[index].desc;
    }, 800);
}

tabButtons.forEach((tab) => {
    tab.addEventListener("click", () => {
        changeTab(tabButtons.indexOf(tab))
        keydownEventListener()
    })
    tab.addEventListener("keyup", (e) => {
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
    input.setAttribute("aria-invalid", "true")
    warningText.style.display = "block"
    warningText.setAttribute("role", "alert")
    errorICon.style.display = "block"
    successText.style.display = "none"
}

registerForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (input.value == "") {
        notSubmit()

    } else {
        successText.style.display = "block"
        successText.setAttribute("role", "status")
        input.style.border = "2px solid #28a745"
        input.value = ""
        input.setAttribute("aria-invalid", "false")
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