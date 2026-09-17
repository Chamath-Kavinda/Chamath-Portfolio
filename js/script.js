/* ====== Typing Animation ====== */
var typed = new Typed(".typing", {
    strings:["","Full-Stack Developer","Associate Software Engineer","React Developer","Node.js Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* ====== Aside ====== */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for(let i=0; i<totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {
        removeBackSection();
        for(let j=0; j<totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function removeBackSection() {
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function showSection(element) {
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    //console.log("#" + target);
    document.querySelector("#" + target).classList.add("active")
}
function updateNav(element) {
    for(let i=0; i<totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelectorAll(".hire-me").forEach(function(btn) {
    btn.addEventListener("click", function() {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })
})

document.querySelector(".whisperwave").addEventListener("click", function() {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* ====== Profile Picture Crossfade (1 min loop) ====== */
(function () {
    const profilePics = ["./images/ProfilePic1.png", "./images/ProfilePic2.png"];
    const heroImgs = [
        document.getElementById("hero-img"),
        document.getElementById("hero-img-mobile")
    ].filter(Boolean);

    if (heroImgs.length === 0) return;

    let picIndex = 0;
    const SWITCH_INTERVAL = 30000; // 30s per image => 60s full loop
    const FADE_DURATION = 600;     // matches CSS opacity transition (0.6s)

    setInterval(function () {
        picIndex = (picIndex + 1) % profilePics.length;

        heroImgs.forEach(img => {
            img.style.opacity = 0;
        });

        setTimeout(function () {
            heroImgs.forEach(img => {
                img.src = profilePics[picIndex];
                img.style.opacity = 1;
            });
        }, FADE_DURATION);
    }, SWITCH_INTERVAL);
})();