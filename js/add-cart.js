document.addEventListener('DOMContentLoaded', () => {
    const nutThemCart = document.querySelectorAll('.add-to-cart');
    const themCart = document.getElementById('cart-items')

    nutThemCart.forEach(btn => {
        btn.addEventListener('click', () => {
            const sanpham = btn.closest('.sanpham');
            const anhsanpham = sanpham.querySelector('img').src;
            const tensanpham = sanpham.querySelector('p').innerText;

            let kiemtra = [...themCart.children].find(taomuc =>
                taomuc.querySelector('.tenmuc').innerText === tensanpham
            );

            if (kiemtra) {
                const tangSL = kiemtra.querySelector('.soluong');
                tangSL.innerText = parseInt(tangSL.innerText) + 1;
            } else {
                const taomuc = document.createElement('div');
                taomuc.classList.add('cart-item');
                taomuc.innerHTML = `
                
                  <div class="d-flex align-items-center">
                    <img src="${anhsanpham}" alt="${tensanpham}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 3px; margin-right: 10px;  margin-bottom: 10px; ">
                    <a class="tenmuc">${tensanpham}</a>
                  </div>

                  <div class="d-flex align-items-center ">
                     <button class="btn btn-sm btn-outline-secondary tru">-</button>
                     <span class="mx-2 soluong">1</span>
                     <button class="btn btn-sm btn-outline-secondary them">+</button>
                     <button class="btn btn-sm btn-danger ms-2 xoa">x</button>
                   </div>
                `;


                themCart.appendChild(taomuc);

                const themBtn = taomuc.querySelector('.them');
                const truBtn = taomuc.querySelector('.tru');
                const xoaBtn = taomuc.querySelector('.xoa');
                const tangSL = taomuc.querySelector('.soluong');

                themBtn.addEventListener('click', () => {
                    tangSL.innerText = parseInt(tangSL.innerText) + 1;
                });

                truBtn.addEventListener('click', () => {
                    const soLuongHienTai = parseInt(tangSL.innerText);
                    if (soLuongHienTai > 1) tangSL.innerText = soLuongHienTai - 1;
                    else taomuc.remove();
                });

                xoaBtn.addEventListener('click', () => {
                    taomuc.remove();
                });


            }


        });
    })

});
