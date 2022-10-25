const body = document.querySelector('body');
let container = document.createElement('div');
container.classList.add('container');
container.className = 'container';
body.appendChild(container);

container = document.querySelector('.container');

for (let i=0; i<256; i++){
    const content = document.createElement('div');
    container.appendChild(content);
}
