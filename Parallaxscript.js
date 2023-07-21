let maxScrollValue = 5000;

let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     text.style.marginTop = value * 2.5 + 'px';
//     leaf.style.top = value * -1.5 + 'px';
//     leaf.style.left = value * 1.5 + 'px';
//     hill5.style.left = value * 1.5 + 'px';
//     hill4.style.left = value * -1.5 + 'px';
//     hill1.style.top = value * 1 + 'px';
// })


//Handling infinite scroll

function handleScroll() {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';

    if (value >= maxScrollValue) {
        // Remove the scroll event listener to stop infinite scrolling
        window.removeEventListener('scroll', handleScroll);
    }
}

// Add the scroll event listener with the handleScroll function
window.addEventListener('scroll', handleScroll);