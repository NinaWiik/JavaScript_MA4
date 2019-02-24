var button = document.getElementById('button');

button.addEventListener('click', function(e) {
    alert('You pushed the button');
    e.stopPropagation();
})