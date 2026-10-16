// info
window.addEventListener("mousemove", (e) => {
    document.querySelector(".clientX").innerText = e.clientX;
    document.querySelector(".clientY").innerText = e.clientY;
    document.querySelector(".offsetX").innerText = e.offsetX;
    document.querySelector(".offsetY").innerText = e.offsetY;
    document.querySelector(".pageX").innerText = e.pageX;
    document.querySelector(".pageY").innerText = e.pageY;
    document.querySelector(".screenX").innerText = e.screenX;
    document.querySelector(".screenY").innerText = e.screenY;
});

// clientX,Y : 브라우저 창안 마우스가 어디 있는지
// offsetX,Y : 특정요소(<div>안) 마우스가 어디 있는지
// pageX,Y : 웹페이지 전체가 마우스가 어디 있는지 (스크롤 포함)
// screenX,Y : 모니터에서 마우스가 어디 있는지

// 마우스 움직이기
let mouseCursor = document.querySelector(".mouse_cursor");

window.addEventListener("mousemove", (e) => {
    mouseCursor.style.left = e.clientX - 25 + "px";
    mouseCursor.style.top = e.clientY - 25 + "px";
});

// 마우스 효과
// document.querySelector(".style1").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("style1");
// });
// document.querySelector(".style1").addEventListener("mouseout", () => {
//     mouseCursor.classList.remove("style1");
// });

// document.querySelector(".style2").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("style2");
// });
// document.querySelector(".style2").addEventListener("mouseout", () => {
//     mouseCursor.classList.remove("style2");
// });

// document.querySelector(".style3").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("style3");
// });
// document.querySelector(".style3").addEventListener("mouseout", () => {
//     mouseCursor.classList.remove("style3");
// });

// document.querySelector(".style4").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("style4");
// });
// document.querySelector(".style4").addEventListener("mouseout", () => {
//     mouseCursor.classList.remove("style4");
// });

// document.querySelector(".style5").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("style5");
// });
// document.querySelector(".style5").addEventListener("mouseout", () => {
//     mouseCursor.classList.remove("style5");
// });

// document.querySelector(".style6").addEventListener("mouseover", () => {
//     mouseCursor.classList.add("style6");
// });
// document.querySelector(".style6").addEventListener("mouseout", () => {
//     mouseCursor.classList.remove("style6");
// });

//for문
// for (let i = 1; i <= 6; i++) {
//     document.querySelector(".style" + i).addEventListener("mouseover", () => {
//         mouseCursor.classList.add("style" + i);
//     });
//     document.querySelector(".style" + i).addEventListener("mouseout", () => {
//         mouseCursor.classList.remove("style" + i);
//     });
// }

//forEach()
// document.querySelectorAll(".mouse_wrap span").forEach((span, idx) => {
//     span.addEventListener("mouseover", () => {
//         mouseCursor.classList.add("style" + (idx + 1));
//     });
//     span.addEventListener("mouseout", () => {
//         mouseCursor.classList.remove("style" + (idx + 1));
//     });
// });

// getAttribute
document.querySelectorAll(".mouse_wrap span").forEach((span, idx) => {
    let attr = span.getAttribute("class");
    span.addEventListener("mouseover", () => {
        mouseCursor.classList.add(attr);
    });
    span.addEventListener("mouseout", () => {
        mouseCursor.classList.remove(attr);
    });
});
