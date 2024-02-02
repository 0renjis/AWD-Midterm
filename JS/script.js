document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const isChecked = this.querySelector('input').checked;
            if (!isChecked) {
                // Uncheck all inputs
                cards.forEach(card => card.querySelector('input').checked = false);
                // Check the clicked input
                this.querySelector('input').checked = true;
            }
        });
    });
});
