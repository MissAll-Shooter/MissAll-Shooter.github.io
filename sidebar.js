const hamborgor_html = `<div class="hmbrgricn hmbrgricn1"></div><div class="hmbrgricn hmbrgricn2"></div><div class="hmbrgricn hmbrgricn3"></div>`;
const sidebar_html = `<a href="/"><img src="/SidebarImages/TutoringDodeleReal.png" id="geog"></a><a href="/chooter/"><img src="/SidebarImages/GeographyDodele.png" id="geog"></a><a href="/butonz/"><img src="/SidebarImages/ButtonsDodele.png" id="geog"></a><a href="/whyareyoureadingthis/"><img src="/SidebarImages/StoryDodele.png" id="geog"></a>`;

const sidebar = document.createElement('div');
const hamborgor = document.createElement('button');

sidebar.classList.add('sidebar');
hamborgor.classList.add('hamborgor');

sidebar.innerHTML = sidebar_html;
hamborgor.innerHTML = hamborgor_html;

hamborgor.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    hamborgor.classList.toggle('open');
});

document.body.append(sidebar, hamborgor);
