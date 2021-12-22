const addBtn = document.querySelector('#add-btn');



addBtn.addEventListener('click', () => {
    addNewNote();
})

function addNewNote(){
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = `<div class="note" id="note">
    <div class="options">
        <button id="edit"><i class="fas fa-edit"></i></button>
        <button id="delete"><i class="fas fa-trash"></i></button>
    </div>
    <div class="markdown hide" id="markdown"></div>
    <textarea id="textarea"></textarea>
    </div>`;

    const editBtn = note.querySelector('#edit');
    const deleteBtn = note.querySelector('#delete');

    const textArea = note.querySelector('#textarea');
    const markdown = note.querySelector('#markdown');

    editBtn.addEventListener('click', () => {
        textArea.classList.toggle('hide');
        markdown.classList.toggle('hide')
    })

    deleteBtn.addEventListener('click', () => {
        note.remove();
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        markdown.innerHTML = marked.parse(value);
    })

    document.body.appendChild(note);
}