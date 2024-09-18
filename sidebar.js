const hamgorgor_html = `<button class="hamborgor">
            <div class="hmbrgricn hmbrgricn1"></div>
            <div class="hmbrgricn hmbrgricn2"></div>
            <div class="hmbrgricn hmbrgricn3"></div>
        </button>`;

const sidebar_html = `
        <div class="sidebar">
            <a href="">Hello world</a>
            <a>Hello world</a>
            <a>Hello world</a>
            <a>Hello world</a>
            <a>Hello world</a>
            <a>Hello world</a>
            <a>Hello world</a>
            <a>Hello world</a>
            <a>Hello world</a>
            <a>Hello world</a>
        </div>`;

const sidebar = document.createElement('div');
const hamborgor = document.createElement('button');

sidebar.classList.add('sidebar');
hamborgor.classList.add('hamborgor');

sidebar.textContent = sidebar_html;
hamborgor.textContent = hamgorgor_html;

document.body.append(sidebar, hamborgor);