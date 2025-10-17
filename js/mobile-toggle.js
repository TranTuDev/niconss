
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "../../fonts/fonts-icons.css"; 
document.head.appendChild(link);

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


document.querySelectorAll('.pick').forEach(item => {
  item.addEventListener('click', () => {
    item.querySelector('.tick').classList.toggle('active');
  });
});






document.querySelectorAll('.entry_image').forEach(entry => {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';

  cursor.innerHTML = `
    <div class="cursor-icons">
      <i class="icon-icon-down_arrow-1"></i>
      <i class="icon-icon-down_arrow-2"></i>
    </div>
  `;

  entry.appendChild(cursor);

  function onMove(e) {
    const rect = entry.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
  }

  entry.addEventListener('mouseenter', e => {
    entry.classList.add('cursor-visible');
    entry.addEventListener('mousemove', onMove);
    onMove(e);
  });

  entry.addEventListener('mouseleave', () => {
    entry.classList.remove('cursor-visible', 'cursor-large');
    entry.removeEventListener('mousemove', onMove);
  });

  entry.addEventListener('mousedown', () => entry.classList.add('cursor-large'));
  entry.addEventListener('mouseup', () => entry.classList.remove('cursor-large'));
});


