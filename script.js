const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');
const button5 = document.querySelector('.button5');
const button100 = document.querySelector('.button100')
button1.addEventListener('click', () => {
   button1.classList.toggle('active');
});

button2.addEventListener('click', () => {
    close(); 
});

button3.addEventListener('click', () => {
    button3.classList.toggle('hello')
});

button4.addEventListener('click', () => {
    button4.classList.toggle('activate')
});

button5.addEventListener('click', () => {
    var x = document.getElementById("myDiv");
    x.textContent = "things are now in proggress that cannot be undone.";
});