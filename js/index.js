const postDates = document.querySelectorAll('time');

postDates.forEach((date) => {
    date.addEventListener('click', (event) => {
        event.target.style.color = 'red';
    })
})