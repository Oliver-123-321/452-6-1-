
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textToChange').textContent = 'The text has been changed!';
});


document.getElementById('toggleTextBtn').addEventListener('click', function() {
    var textElement = document.getElementById('textToToggle');
    if (textElement.textContent === 'Text to Toggle') {
        textElement.textContent = 'Text Toggled!';
    } else {
        textElement.textContent = 'Text to Toggle';
    }
});




window.onload = addDynamicElement;