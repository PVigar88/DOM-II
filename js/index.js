// Your code goes here
// document.addEventListener('click', () => console.log(event.target));
// #1 & 2 nav focus and nav Blur

let navBar = document.querySelectorAll('.nav-link')

navBar.forEach(function (element) {
    element.addEventListener('focus', function (event) {
        event.target.style.fontSize = '5em';
    })
    element.addEventListener('blur', function (event) {
        event.target.style.fontSize = '';
    })

})

// #3 on click toggles header background between white and blue and the body tan.
let heading = document.querySelector('header');
let bodyContainer = document.querySelector('body');
bodyContainer.addEventListener('click', function (event) {
    if (heading.style.background == 'white') {
        heading.style.background = "lightblue";
        bodyContainer.style.backgroundColor = 'tan'
        event.stopImmediatePropagation
    }
    else {
        heading.style.background = 'white'
        bodyContainer.style.backgroundColor = 'white'
        event.stopImmediatePropagation
    }
    // competing event propagation stopped above.
    navBar.style.color = 'green';
})

// #4 on Key stroke "B" the text becomes Blue

bodyContainer.addEventListener('keydown', function (event) {
    if ((event.key === 'b' || event.key === 'B') && bodyContainer.style.color !== 'blue') {
        // bodyContainer.style.fontWeight = 'bold';
        bodyContainer.style.color = 'blue';
    }
    else if ((event.key === 'b' || event.key === 'B') && bodyContainer.style.color === 'blue') {
        // bodyContainer.style.fontWeight = '';
        bodyContainer.style.color = 'black';
    }
})

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

//8 Scroll

let mainheader = document.querySelector('.logo-heading')

window.onscroll = function() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mainheader.style.fontSize = '8em'
       
    }
    else if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        mainheader.style.fontSize = '6.5em'
    }
    else {
        mainheader.style.fontSize = '5em';
        
    }
     
}

//9 double click

let paraGroup = document.querySelectorAll('p');
paraGroup.forEach(function (element) {
    element.style.transition = '3s ease-in-out'
    element.addEventListener('dblclick', function (event) {
        event.target.style.color = bodyContainer.style.backgroundColor;
        setTimeout(function () {
            event.target.style.color = 'black'
        }, 5000)
    })
})

// #10 resize

let subHeadGroup = document.querySelectorAll('h2');
window.addEventListener('resize', function () {
    subHeadGroup.forEach(function (element) {
    
        if (element.style.fontWeight == 'bold') {
            element.style.fontWeight = 'bolder';
        }
        else if (element.style.fontWeight == 'bolder') {
            element.style.fontWeight = 'initial';
        }
        else {
            element.style.fontWeight = 'bold';
        }
    })
})


// prevent default on links
navBar.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault;
    })


})

