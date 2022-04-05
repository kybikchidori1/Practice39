const btn = document.querySelector('.btn');
let timerId;

btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    // const timerId = setTimeout(logger, 2000);
    const timerId = setInterval(logger, 2000);
});

function logger () {
    console.log('text');
}
