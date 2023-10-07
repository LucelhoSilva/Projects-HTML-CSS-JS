const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActiveClasses();
        card.classList.add('active');
    });
});

function removeActiveClasses() {
    cards.forEach((card) => {
        card.classList.remove('active');
    });
}


document.getElementById('alterarLayout').addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('coluna');
});
