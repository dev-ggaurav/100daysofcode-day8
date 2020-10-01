const open = document.getElementById('open');
const modalContainer = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click',function(){
    modalContainer.classList.add('show');
})

close.addEventListener('click',function(){
    modalContainer.classList.remove('show');
})

