new WOW().init();

const selectElement = (e) => document.querySelector(e);
selectElement('.open').addEventListener('click', () => { selectElement('.nav-list').classList.add('active'); });
selectElement('.close').addEventListener('click', () => { selectElement('.nav-list').classList.remove('active'); });
const links = document.querySelectorAll('a'); links.forEach(link => { link.setAttribute('draggable', 'false'); });
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(navLink => { navLink.addEventListener('click', () => { selectElement('.nav-list').classList.remove('active'); }); });
let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.activites-grid-item-link');
let closePopupButton = document.querySelector('.close-popup');
openPopupButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
       e.preventDefault();
       const parent = button.closest('.activites-grid-item');
       const title = parent.querySelector('h4').textContent;
       const text = parent.querySelector('.popup-text').textContent;
       const link = parent.querySelector('.popup-link').value;
       document.querySelector('.popup__title').textContent = title;
       document.querySelector('.popup__text').textContent = text;
       document.querySelector('.popup__btn a').href = '/cracks/' + link;
       popupBg.classList.add('active');
       popup.classList.add('active');
   })
});
closePopupButton.addEventListener('click',() => {
   popupBg.classList.remove('active');
   popup.classList.remove('active');
});
document.addEventListener('click', (e) => {
   if(e.target === popupBg) {
       popupBg.classList.remove('active');
       popup.classList.remove('active');
   }
});