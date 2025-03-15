document.addEventListener('DOMContentLoaded', () => {
    const vinylRecord = document.getElementById('vinylRecord');
    const spinButton = document.getElementById('spinButton');
    let isSpinning = false;

    spinButton.addEventListener('click', () => {
        if (!isSpinning) {
            vinylRecord.classList.add('spinning');
            spinButton.textContent = 'Stop Record';
            isSpinning = true;
        } else {
            vinylRecord.classList.remove('spinning');
            spinButton.textContent = 'Spin Record';
            isSpinning = false;
        }
    });
});