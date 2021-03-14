// Your code goes here
// document.addEventListener('click', () => console.log(event.target));
// #1 



// #2 on click toggles header background between white and blue and the body tan.
let heading = document.querySelector('header');
let bodyContainer = document.querySelector('body');
bodyContainer.addEventListener('click', function (event) {
    if (heading.style.background == 'white') {
        heading.style.background = "lightblue";
        bodyContainer.style.backgroundColor = 'tan';
        event.stopImmediatePropagation
    }
    else {
        heading.style.background = 'white'
        bodyContainer.style.backgroundColor = 'white';
        event.stopImmediatePropagation
    }
    
})

// #3 on Key stroke "B" the text becomes Bold and Blue

bodyContainer.addEventListener('keydown', function (event) {
    if ((event.key === 'b' || event.key === 'B') && bodyContainer.style.color !== 'blue') {
        bodyContainer.style.fontWeight = 'bold';
        bodyContainer.style.color = 'blue';
    }
    else if ((event.key === 'b' || event.key === 'B') && bodyContainer.style.color === 'blue') {
        bodyContainer.style.fontWeight = '';
        bodyContainer.style.color = 'black';
    }
})

//#4 wheel




//#5 load
let imgGroup = document.querySelectorAll('img');
window.onload = function (event) {
    imgGroup.forEach(element =>
        element.style.filter ='blur(5px)'
    )
}

//#6 & 7 - Mouseover and mouseout
imgGroup.forEach(function (element) {
    element.addEventListener('mouseover', function (event) {
        event.target.style.filter = 'none';
    })
    element.addEventListener('mouseout', function (event) {
        event.target.style.filter = 'blur(5px)';
    })
}
)
