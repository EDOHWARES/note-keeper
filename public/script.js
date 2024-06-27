//Handling Category Buttons
const buttons = document.querySelectorAll('.category-btns button');
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});








// Handling Modal
let noteId;

const modal = document.querySelector('.modal');

document.querySelectorAll('#delete-el').forEach(button => {
    button.addEventListener('click', (event) => {
        noteId = event.target.getAttribute('data-id');
        modal.style.display='block';
    })
});

document.querySelector('.modal #confirmDelete').addEventListener('click', () => {
    fetch(`http://localhost:3000/delete-note/${noteId}`, {
        method: 'POST'
    })
    .then(response => {
        modal.style.display='none';
        location.reload();
    })
    .catch(err => console.log(err));
})

document.querySelector('.modal #cancelDelete').addEventListener('click', () => {
    modal.style.display='none';
})

document.querySelector('.modal .close').addEventListener('click', () => {
    modal.style.display='none';
})
