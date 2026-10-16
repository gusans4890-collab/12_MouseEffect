// 마우스 움직임 효과
const mouseCursor = document.querySelector(".mouse_cursor");
const header = document.querySelector("#header");
const span = document.querySelectorAll(".mouse_wrap span");
const info = document.querySelector(".mouse_info");
const footer = document.querySelector("#footer");

const width = mouseCursor.offsetWidth / 2;
const height = mouseCursor.offsetHeight / 2;

window.addEventListener("mousemove", (e) => {
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;

    gsap.to(mouseCursor, { left: e.pageX - width, top: e.pageY - height, duration: 0.4 });
});

// 마우스 오버 효과
span.forEach((element) => {
    element.addEventListener("mouseenter", () => {
        mouseCursor.classList.add("show");
    });
    element.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("show");
    });

    header.addEventListener("mouseenter", () => {
        mouseCursor.classList.add("show");
    });
    header.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("show");
    });

    info.addEventListener("mouseenter", () => {
        mouseCursor.classList.add("show");
    });
    info.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("show");
    });

    footer.addEventListener("mouseenter", () => {
        mouseCursor.classList.add("show");
    });
    footer.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("show");
    });
});
