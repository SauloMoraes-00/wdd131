const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters')) || [];
}

function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
    renderList();
}

function displayList(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => deleteChapter(item));

    listItem.append(deleteButton);
    list.appendChild(listItem);
}

function renderList() {
    list.innerHTML = "";
    chaptersArray.forEach(displayList);
}

let chaptersArray = getChapterList();

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

renderList();

