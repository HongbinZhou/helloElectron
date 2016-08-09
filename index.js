const marked = require('marked');

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

