


const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//
empties.forEach((empty) => {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
});

// Called when we starting drag image
function dragStart(){
    this.className += ' hold';
    setTimeout(() => {
        this.className = 'invisible';
    }, 0);
}

// Called when we stopped drag image
function dragEnd(){
    this.className = 'fill';
}

// Called when we hover image on another box and hold it
function dragOver(event){
    event.preventDefault();
}

//Called when we hover image on another box
function dragEnter(event){
    event.preventDefault();
    this.className += ' hovered';
}

//Called when we stop holding image above box
function dragLeave(){
    console.log('Leave');
    this.className = 'empty'
}

// Drop Image on another box
function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}

