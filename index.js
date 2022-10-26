const body = document.querySelector('body');

let titleContainer = document.createElement('div');
titleContainer.classList.add('title-container');
titleContainer.innerHTML = "<h1>Etch Sketch</h1>";
body.appendChild(titleContainer);

titleContainer = document.querySelector('.main-container');

let mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');
body.appendChild(mainContainer);

mainContainer = document.querySelector('.main-container');

let btnContainer = document.createElement('div');
btnContainer.classList.add('btn-container');
mainContainer.appendChild(btnContainer);

btnContainer = document.querySelector('.btn-container');

sizeBtn = document.createElement('button');
sizeBtn.innerText = "Grid Size"
sizeBtn.id = 'size-btn'
btnContainer.appendChild(sizeBtn);

clearBtn = document.createElement('button');
clearBtn.innerText = "Clear"
clearBtn.id = 'clear-btn'
btnContainer.appendChild(clearBtn);

rainBowBtn = document.createElement('button');
rainBowBtn.innerText = "Rainbow"
rainBowBtn.id = 'rainbow-btn'
btnContainer.appendChild(rainBowBtn);

eraserBtn = document.createElement('button');
eraserBtn.innerText = "Eraser"
eraserBtn.id = 'eraser-btn'
btnContainer.appendChild(eraserBtn);

// colotBtn = document.createElement('button');
// colotBtn.innerText = "Color"
// colotBtn.id = 'color-btn'
// btnContainer.appendChild(colotBtn);

let container = document.createElement('div');
container.classList.add('container');
container.className = 'container';

mainContainer.appendChild(container);

container = document.querySelector('.container');

for (let i=0; i<256; i++){
    const content = document.createElement('div');
    content.className = 'cell';
    container.appendChild(content);
}

let drawMode = 'Click';
let gridSize = 16;

document.addEventListener('click',function(e){
    if(e.target && (e.target.id==='size-btn' || e.target.id==='clear-btn')){

        container = document.querySelector('.container');
        if (e.target.id ==='size-btn'){
            gridSize = window.prompt("Enter the grid size");
        }

        let newContainer = document.createElement('div');
        newContainer.className = 'container';
        container.replaceWith(newContainer);
        
        for (let i=0; i<(gridSize*gridSize); i++){
            const content = document.createElement('div');
            content.className = 'cell';
            newContainer.appendChild(content);
        }

        newContainer.style['grid-template-columns'] = `repeat(${gridSize}, 1fr)`;
        newContainer.style['grid-template-rows'] = `repeat(${gridSize}, 1fr)`;
    }
    else if (e.target && e.target.className==='cell'){
        if (e.target.style.backgroundColor != "rgb(246, 246, 201)"){
            e.target.style.backgroundColor = "#F6F6C9";            
        }
        else{
            e.target.style.backgroundColor = "#4FA095"; 
        }
    }
    else if(e.target && e.target.id==='rainbow-btn'){
        if (drawMode==='overRainbow'){
            drawMode='Click'
        }
        else{
            drawMode='overRainbow';
        }
    }
    else if(e.target && e.target.id==='eraser-btn'){
        if (drawMode==='eraser'){
            drawMode='Click'
        }
        else{
            drawMode='eraser';
        }
    }
})

document.addEventListener('mouseover', function(e){
    if(e.target && e.target.className==='cell' && drawMode === 'overRainbow'){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    }
    else if(e.target && e.target.className==='cell' && drawMode === 'overDarker'){
        pass;
    }
    else if(e.target && e.target.className==='cell' && drawMode === 'overBrighter'){
        pass;
    }
    else if(e.target && e.target.className==='cell' && drawMode === 'eraser'){
        if (e.target.style.backgroundColor != "rgb(246, 246, 201)"){
            e.target.style.backgroundColor = "#F6F6C9";            
        }
    }      
});
