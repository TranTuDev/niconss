const goTopBtn = document.getElementById("goTop");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollTop / docHeight;

    // Hiện / ẩn nút
    if (scrollTop > 200) {
        goTopBtn.classList.add("showw");
    } else {
        goTopBtn.classList.remove("showw");
    }

    // Cập nhật vòng progress (góc xoay)
    const angle = scrollPercent * 360;
    goTopBtn.style.setProperty("--progress-angle", `${angle}deg`);
});

// Cuộn lên đầu
goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
