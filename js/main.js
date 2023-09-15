const chooseColor = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');


const open = (event) => {
    const target = event.currentTarget
    const button = target.dataset.button
    const contentActive = document.querySelectorAll(`.${button}`);

    chooseColor.forEach((element) => {
        element.classList.remove('choose-color__btn--active')
    })

    target.classList.add('choose-color__btn--active')

    contentItem.forEach((element) => {
        element.classList.remove('content-item__active')
    })

    contentActive.forEach((element) => {
        element.classList.add('content-item__active')
    })
}

chooseColor.forEach((element) => element.addEventListener('click', open))
