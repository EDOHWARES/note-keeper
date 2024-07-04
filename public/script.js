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

const displayNotes = async (notes) => {
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('demo-note');
        noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <p>
                ${note.content.substring(0, 100)}
                <span>${note.created_at.toString().substring(0, 24)}</span>
            </p>
            <a class='edit-el-cont' href='/view-note/${note.id}'>
                <img class='edit-el' src='/icons/edit.png' alt='edit-note' />
            </a>
            <img class='delete-el' src='/icons/delete.png' alt='more-options' id='delete-el' data-id='${note.id}' />
        `;
        notesContainer.appendChild(noteElement);
    });
};

if (searchEl) {
    searchEl.addEventListener('input', async () => {
        const query = searchEl.value.trim();
        try {
            const response = await fetch(`/?search=${encodeURIComponent(query)}`);

            if (!response.ok) {
                throw new Error(`Http Error Status: ${response.status}`);
            };

            const notes = await response.json();
            displayNotes(notes)
        } catch (error) {
            console.error('Error Searching notes', error);
        }
    });

    
}