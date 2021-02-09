document.querySelector(".header-hamburger").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("nav-active")
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
    // document.querySelector(".features-feature").classList.add("animAdded")

    setTimeout(() => {
        document.querySelector(".feature-imgWrapper").classList.remove("animAdded")
        document.querySelector(".feature-textWrapper").classList.remove("animAdded")
        // document.querySelector(".features-feature").classList.remove("animAdded")


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