
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('textToChange').textContent = 'The text has been changed!';
});


document.getElementById('colorChanger').addEventListener('click', function() {
    this.style.backgroundColor = this.style.backgroundColor === 'red' ? 'white' : 'red';
});



addStyledElement();