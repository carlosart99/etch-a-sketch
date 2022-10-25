const body = document.querySelector('body');

let btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
body.appendChild(btnContainer);

btnContainer = document.querySelector('.btn-container');

btn = document.createElement('button');
btn.innerText = "Grid Size"
btn.id = 'btn'
btnContainer.appendChild(btn);

let container = document.createElement('div');
container.classList.add('container');
container.className = 'container';

body.appendChild(container);

container = document.querySelector('.container');

for (let i=0; i<256; i++){
    const content = document.createElement('div');
    container.appendChild(content);
}

document.addEventListener('click',function(e){
    if(e.target && e.target.id==='btn'){

        container = document.querySelector('.container');

        gridSize = window.prompt("Enter the grid size");

        let newContainer = document.createElement('div');
        newContainer.className = 'container';
        container.replaceWith(newContainer);
        
        for (let i=0; i<(gridSize*gridSize); i++){
            const content = document.createElement('div');
            newContainer.appendChild(content);
        }

        newContainer.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
        newContainer.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;
    }
})
