document.addEventListener('DOMContentLoaded', () => {
   const header = document.querySelector('#header');
   const submenuBg = document.querySelector('.submenu-bg');
   const gnbLinks = document.querySelectorAll('.gnb > li > a');
   const subMenus = document.querySelectorAll('.gnb > li .sub-menu');

   let maxHeight = 0;
   subMenus.forEach(menu => {
      const h = menu.scrollHeight;
      if (h > maxHeight) maxHeight = h;
   });

   gnbLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
         header.classList.add('open');
         submenuBg.style.height = `${maxHeight + 30}px`;
      });
   });

   header.addEventListener('mouseleave', () => {
      header.classList.remove('open');
      submenuBg.style.height = '0px';
   });
});
// ===================================================
// H2 타이핑 효과를 위한 JavaScript
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
   const typingElement = document.querySelector('.typing-effect');
   if (typingElement) {
      const text = typingElement.textContent;
      typingElement.innerHTML = ''; // 기존 텍스트 삭제
      text.split('').forEach((char, index) => {
         const span = document.createElement('span');
         // 공백은 non-breaking space로 처리하여 레이아웃 유지
         span.innerHTML = char === ' ' ? '&nbsp;' : char;
         span.style.animationDelay = `${index * 60}ms`; // 글자마다 딜레이 적용
         typingElement.appendChild(span);
      });
   }
});
