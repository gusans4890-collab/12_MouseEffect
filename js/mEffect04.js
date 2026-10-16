// 마우스 움직임 효과
const mouseCursor = document.querySelector(".mouse_cursor");

const width = mouseCursor.offsetWidth / 2;
const height = mouseCursor.offsetHeight / 2;

window.addEventListener("mousemove", (e) => {
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;

    gsap.to(mouseCursor, { left: e.pageX - width, top: e.pageY - height, duration: 0.4 });
});
