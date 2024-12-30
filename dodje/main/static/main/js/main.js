async function addNote() {
    const title = document.getElementById('title').value;
    const text = document.getElementById('text').value;

    if (title && text) {
        const response = await fetch('/add_note/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
            },
            body: JSON.stringify({ title, text })
        });

        if (response.ok) {
            const data = await response.json();
            const notesContainer = document.getElementById('notes');
            notesContainer.innerHTML += `
                <div class="note">
                    <h4>${data.title}</h4>
                    <p>${data.text}</p>
                </div>`;
            document.getElementById('title').value = '';
            document.getElementById('text').value = '';
        } else {
            console.error('Ошибка при добавлении заметки');
        }
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
}

            /*Счетчик*/
function updateCharCount() {
    const textarea = document.getElementById('text');
    const remainingChars = 2000 - textarea.value.length;
    document.getElementById('char-count').textContent = remainingChars;
}





