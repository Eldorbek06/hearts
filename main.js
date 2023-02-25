let heartOne = document.querySelector('.heart')
let heartOneRect = heartOne.querySelectorAll('.rectangle')

let heartTwo = heartOne.nextElementSibling
let heartTwoRect = heartTwo.querySelectorAll('.rectangle')

let heartThree = heartTwo.nextElementSibling
let heartThreeRect = heartThree.querySelectorAll('.rectangle')

let typewriter = document.querySelector('.typewriter h1')

window.onload = () => {
    setTimeout(() => {
        heartThree.classList.add('heart-active')
        heartThreeRect.forEach(el => {
            el.style.background = 'red'
        })
        setTimeout(() => {
            heartTwo.classList.add('heart-active')
            heartTwoRect.forEach(el => {
                el.style.background = 'red'
            })
            setTimeout(() => {
                heartOne.classList.add('heart-active')
                heartOneRect.forEach(el => {
                    el.style.background = 'red'
                })

                setTimeout(() => {
                    typewriter.style.display = 'block'
                }, 1000);
            }, 500);
        }, 500);
    }, 500);
}