const messages = document.querySelectorAll('.message'),
    headers = document.querySelectorAll('.header'),
    chat = document.querySelector('.chat'),
    names = document.querySelectorAll('.names');

let option = `
        <div class="option">
            <a href="#" id="collaps" class="click">Collapse all</a>
            <a href="#" id="show">Show 5 only</a>
        </div>
`;
chat.insertAdjacentHTML('beforeend', option);
const show = document.querySelector('#show'),
    options = document.querySelector('.option');


names.forEach((name, id) => {
    if (id > 4) {
        show.addEventListener('click', () => {
            name.classList.toggle('d');
            if (name.classList.contains('d')) {
                show.innerText = `Show all messages(${messages.length})`;
                options.classList.add('up');
                options.classList.remove('down');
            } else {
                show.innerText = `Show 5 only`;
                options.classList.add('down');
                options.classList.remove('up');
            };
        });
    };
});


names.forEach(name => {//Перебираем имена someone nick
    name.addEventListener('click', (e) => {//Навешиваем обработчик на каждый родительский блок
        headers.forEach(header => {//Перебираем header(в которых надписи someone, 1 minute ago)
            if (e.target == header) {//Если попал по классу header
                name.classList.toggle('active') //Навешиваем класс active на этот name
            }
            if (name.classList.contains('active')) {//если name содержит класс active
                collaps.classList.remove('click');// То кнопка collaps All будет серой
            }
        });
    });
})


function collapsAll() {
    const collaps = document.querySelector('#collaps');//Находим кнопку Collaps all
    collaps.addEventListener('click', () => {//Навешиваем обработчик
        names.forEach(name => {//Перебираем родительские блоки
            name.classList.remove('active');//И удаляем класс active по клику на Collaps all
        });
        collaps.classList.add('click');//Дает серый цвет
        show.classList.remove('click');//Убирает серый цвет у кнопки show
    });
};
collapsAll();

