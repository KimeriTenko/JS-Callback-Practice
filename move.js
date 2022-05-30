const character = newImage('assets/green-character/static.gif')
move(character).withArrowKeys(100, 250)

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom) {

    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}
setInterval(function () {
    if (direction === 'west') {
        x = x - 1
    }
    if (direction === 'north') {
        y = y + 1
    }
    if (direction === 'east') {
        x = x + 1
    }
    if (direction === 'south') {
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)

document.addEventListener('keydown', function (e) {
    if (e.repeat) return;

    if (e.key === 'ArrowLeft') {
        direction = 'west'
    }
    if (e.key === 'ArrowUp') {
        direction = 'north'
    }
    if (e.key === 'ArrowRight') {
        direction = 'east'
    }
    if (e.key === 'ArrowDown') {
        direction = 'south'
    }
})

document.addEventListener('keyup', function (e) {
    direction = null
})
