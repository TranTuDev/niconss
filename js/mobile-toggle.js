

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


document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".submenu-toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();

      const parent = toggle.closest(".submenu-item");
      const submenu = parent.querySelector("ul");

      // Đóng các submenu khác cùng cấp
      const siblingSubmenus = parent.parentElement.querySelectorAll(".submenu-item > ul.open");
      siblingSubmenus.forEach(sib => {
        if (sib !== submenu) {
          sib.classList.remove("open");
          sib.previousElementSibling?.classList.remove("active");
        }
      });

      // Toggle submenu hiện tại
      if (submenu) {
        submenu.classList.toggle("open");
        toggle.classList.toggle("active");
      }
    });
  });
});


document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        setTimeout(() => {
            const icon = button.querySelector('.toggle-iconn');
            if (button.classList.contains('collapsed')) {
                icon.textContent = '+';
            } else {
                icon.textContent = '−';
            }
        }, 300); // chờ hiệu ứng collapse hoàn tất
    });
});
