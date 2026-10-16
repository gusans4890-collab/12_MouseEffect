// 마우스 움직임 효과
const mouseCursor = document.querySelector(".mouse_cursor");
const mouseCursor2 = document.querySelector(".mouse_cursor2");
const mouseCursor3 = document.querySelector(".mouse_cursor3");
const header = document.querySelector("#header");
const span = document.querySelectorAll(".mouse_wrap span");
const info = document.querySelector(".mouse_info");
const footer = document.querySelector("#footer");

window.addEventListener("mousemove", (e) => {
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;

    // mouseCursor.style.left = e.pageX - 5 + "px";
    // mouseCursor.style.top = e.pageY - 5 + "px";
    // mouseCursor2.style.left = e.pageX - 15 + "px";
    // mouseCursor2.style.top = e.pageY - 15 + "px";
    // mouseCursor3.style.left = e.pageX - 25 + "px";
    // mouseCursor3.style.top = e.pageY - 25 + "px";

    //gsap
    gsap.to(mouseCursor, { duration: 0.3, left: e.pageX - 5, top: e.pageY - 5 });
    gsap.to(mouseCursor2, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 5 });
    gsap.to(mouseCursor3, { duration: 1.5, left: e.pageX - 25, top: e.pageY - 5 });
});

// 마우스 오버효과
header.addEventListener("mouseover", () => {
    mouseCursor.classList.add("active");
    mouseCursor2.classList.add("active");
    mouseCursor3.classList.add("active");
});
header.addEventListener("mouseout", () => {
    mouseCursor.classList.remove("active");
    mouseCursor2.classList.remove("active");
    mouseCursor3.classList.remove("active");
});

// 마우스 오버효과 - info
info.addEventListener("mouseover", () => {
    mouseCursor.classList.add("active2");
    mouseCursor2.classList.add("active2");
    mouseCursor3.classList.add("active2");
});
info.addEventListener("mouseout", () => {
    mouseCursor.classList.remove("active2");
    mouseCursor2.classList.remove("active2");
    mouseCursor3.classList.remove("active2");
});

span.forEach((item) => {
    item.addEventListener("mouseover", () => {
        mouseCursor.classList.add("active3");
        mouseCursor2.classList.add("active3");
        mouseCursor3.classList.add("active3");
    });

    item.addEventListener("mouseout", () => {
        mouseCursor.classList.remove("active3");
        mouseCursor2.classList.remove("active3");
        mouseCursor3.classList.remove("active3");
    });
});
