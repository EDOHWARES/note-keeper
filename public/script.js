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


// Search Input

const searchEl = document.getElementById('search-input');
const notesContainer = document.querySelector('.notes');

if (searchEl) {
    searchEl.addEventListener('input', async () => {
        const query = searchEl.value.trim();
        try {
            await fetch(`/?search=${query}`);
        } catch (error) {
            console.error('Error Searching notes', error);
        }
    })
}