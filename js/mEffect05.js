// 마우스 움직임 효과
const mouseCursor = document.querySelector(".mouse_cursor");

window.addEventListener("mousemove", (e) => {
    let width = mouseCursor.offsetWidth / 2;
    let height = mouseCursor.offsetHeight / 2;
    // 마우스 움직임
    let centerPageX = e.pageX - window.innerWidth / 2;
    let centerPageY = e.pageY - window.innerHeight / 2;

    //이미지 움직임
    const move = document.querySelector(".mouse_wrap figure img");
    move.style.transform = `translate(${centerPageX / 20}px, ${-centerPageY / 20}px)`;

    gsap.to(mouseCursor, {
        duration: 0.3,
        left: e.pageX,
        top: e.pageY,
    });

    // info
    document.querySelector(".mousePageX").innerText = e.pageX;
    document.querySelector(".mousePageY").innerText = e.pageY;
    document.querySelector(".centerPageX").innerText = centerPageX;
    document.querySelector(".centerPageY").innerText = centerPageY;
});
