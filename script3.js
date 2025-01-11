
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textToChange').textContent = 'The text has been changed!';
});


document.getElementById('colorChanger').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'red' ? 'white' : 'red';
});

function addStyledElement() {
    var newElement = document.createElement('div');
    newElement.textContent = 'New Styled Element';
    newElement.style.color = 'blue';
    newElement.style.fontSize = '20px';
    newElement.style.marginTop = '20px';
    document.body.appendChild(newElement);
}

addStyledElement();