const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');

button1.addEventListener('click', () => {
   button1.classList.toggle('active');
});

button2.addEventListener('click', () => {
    close(); 
});

button3.addEventListener('click', () => {
    button3.classList.toggle('hello')
})

button4.addEventListener('click', () => {
    button4.classList.toggle('activate')
})