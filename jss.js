const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const message = document.getElementById('message');

noButton.addEventListener('click', function() {
    noButton.classList.add('move');
    setTimeout(() => {
        noButton.classList.remove('move');
    }, 1000);
});

yesButton.addEventListener('click', function() {
    message.style.display = 'block';
    message.classList.add('fadeIn');
});
