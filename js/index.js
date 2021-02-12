document.querySelector(".header-hamburger").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("nav-active")

    if(document.querySelector(".header").classList.contains("nav-active")){
        document.querySelector(".header-hamburger").setAttribute("aria-expanded","true")
    }
    else{
        document.querySelector(".header-hamburger").setAttribute("aria-expanded","false")
    }
    document.querySelector("body").classList.toggle("scrollDisabled")

})

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

function changeTab(index) {

    tabButtons.forEach((tab) => {
        tab.classList.remove("active")
    })
    tabButtons[index].classList.add("active")

    document.querySelector(".feature-imgWrapper").classList.add("animAdded")
    document.querySelector(".feature-textWrapper").classList.add("animAdded")

    setTimeout(() => {
        document.querySelector(".feature-imgWrapper").classList.remove("animAdded")
        document.querySelector(".feature-textWrapper").classList.remove("animAdded")
    }, 1000);

    setTimeout(() => {
        document.querySelector(".feature-img").src = feature[index].imgSrc;
        document.querySelector(".feature-heading").textContent = feature[index].heading;
        document.querySelector(".feature-desc").textContent = feature[index].desc;
        document.querySelector(".feature-img").alt = feature[index].altTxt;
    }, 1000);
}


let tabButtons = document.querySelectorAll(".tab")

tabButtons.forEach((tab) => {
    tab.addEventListener("click", function () {
        changeTab([...tabButtons].indexOf(tab))
    })
});


document.querySelector(".register-form").addEventListener("submit", (e) => {
    if (document.querySelector(".form-input").value == "") {
        e.preventDefault()
        notSubmit()
    } else {
        e.preventDefault();
        document.querySelector(".form-success-text").style.display = "block"
        document.querySelector(".form-input").style.border = "2px solid #28a745"
        document.querySelector(".form-input").value = ""
        document.querySelector(".form-warning-text").style.display = "none"
        document.querySelector(".form-error").style.display = "none"

        setTimeout(() => {
            document.querySelector(".form-success").style.display = "none"
            document.querySelector(".form-input").style.border = "none"
        }, 1500);
    }
})

document.querySelector(".form-input").addEventListener("invalid", (e) => {
    e.preventDefault()
    notSubmit()
})

function notSubmit() {
    document.querySelector(".form-input").style.border = "2px solid hsl(0, 94%, 66%)"
    document.querySelector(".form-warning-text").style.display = "block"
    document.querySelector(".form-error").style.display = "block"
    document.querySelector(".form-success-text").style.display = "none"
}