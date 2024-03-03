document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            const isChecked = this.querySelector('input').checked;
            if (!isChecked) {
                cards.forEach(card => card.querySelector('input').checked = false);
                this.querySelector('input').checked = true;
            }
        });
    });
});
