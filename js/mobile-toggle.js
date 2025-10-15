document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".mb-menu-link");

  menuLinks.forEach((link) => {
    const parentItem = link.closest(".nav-mb-item");
    const subMenu = parentItem.querySelector(".sub-nav-menu");

    if (subMenu) {
      // có sub menu -> thêm class để click toggle
      link.addEventListener("click", (e) => {
        e.preventDefault();

        // đóng tất cả menu khác
        document.querySelectorAll(".nav-mb-item.open").forEach((item) => {
          if (item !== parentItem) {
            item.classList.remove("open");
            const sm = item.querySelector(".sub-nav-menu");
            if (sm) sm.classList.remove("show");
          }
        });
        // toggle menu hiện tại
        parentItem.classList.toggle("open");
        subMenu.classList.toggle("show");
      });
    }
  });
});
