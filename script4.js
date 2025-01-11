
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


function addDynamicElement() {
    var container = document.getElementById('container');
    var newElement = document.createElement('div');
    newElement.id = 'dynamicElement';
    newElement.textContent = 'This is a dynamically added element.';
    container.appendChild(newElement);
}


window.onload = addDynamicElement;