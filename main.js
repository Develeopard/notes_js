const addBtn = document.querySelector('#add-btn');

const notes = JSON.parse(localStorage.getItem('notes'))


if(notes){
    notes.forEach((note) => {
        addNewNote(note)
    })
}

addBtn.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(text = ''){
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = `<div class="note" id="note">
    <div class="options">
        <button id="edit"><i class="fas fa-edit"></i></button>
        <button id="delete"><i class="fas fa-trash"></i></button>
    </div>
    <div class="markdown ${text ? '' : 'hide'}" id="markdown"></div>
    <textarea id="textarea" class="${text ? 'hide' : ''}"></textarea>
    </div>`;

    const editBtn = note.querySelector('#edit');
    const deleteBtn = note.querySelector('#delete');

    const textArea = note.querySelector('#textarea');
    const markdown = note.querySelector('#markdown');

    textArea.value = text;
    markdown.innerHTML = marked.parse(text);

    editBtn.addEventListener('click', () => {
        textArea.classList.toggle('hide');
        markdown.classList.toggle('hide')
    })

    deleteBtn.addEventListener('click', () => {
        note.remove();

        updateLS();
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        markdown.innerHTML = marked.parse(value);

        updateLS()
    })

    document.body.appendChild(note);
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value)
    });

    localStorage.setItem('notes', JSON.stringify(notes));
}