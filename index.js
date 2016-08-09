const marked = require('marked');

const container = document.querySelector('.container');
const editor = document.querySelector('.editor textarea');
const preview = document.querySelector('.preview');

marked.setOptions({
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
});

editor.onkeyup = generatePreview;

function generatePreview () {
    var content = editor.value;
    var html = marked(content);
    preview.innerHTML = html;
}

const remote = require('electron').remote;
const {dialog} = require('electron').remote;
const fs = require('fs');

const openFileLink = document.querySelector('a.open-file');

openFileLink.onclick = (evt) => {
    dialog.showOpenDialog({
        title: 'Select a file to edit',
        filters: [
            {
                name: 'Markdown files', extensions: ['md', 'markdown']
            }
        ]
    }, (filenames) => {
        if (!filenames) return;
        if (filenames.length > 0) {
            openFile(filenames[0]);
        }
    }
                         );
};

function openFile (filename) {
    var contents = fs.readFileSync(filename);
    currentFile = filename;

    editor.value = contents;
    container.classList.remove('hidden');

    generatePreview();
}
