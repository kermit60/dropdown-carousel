const dropdown = (() => {
    const dropDownButton = document.querySelector('#drop-down-button');
    const links = document.querySelector('.links');

    dropDownButton.addEventListener('mouseover', () => {
        links.classList.remove('hidden');
    });

    dropDownButton.addEventListener('mouseout', () => {
        links.classList.add('hidden');
    });

    links.addEventListener('mouseover', () => {
        links.classList.remove('hidden');
    })

    links.addEventListener('mouseout', () => {
        links.classList.add('hidden');
    })
})();


export default dropdown;