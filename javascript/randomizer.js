function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



window.onload = function() {
    const chance = Math.floor(Math.random() * 12)
    const lmd = Math.floor(Math.random() * 400)
    console.log('Chance: ' + chance)
    if ([1, 2, 3, 4, 5, 6, 7, 8].includes(chance)) {
        randNum = getRandomInt(1, 8)
        console.log('RanNum: ' + randNum)
        document.body.style.backgroundSize = 'cover'
        if (randNum === 1) {
            document.body.style.backgroundImage = "url('./assets/img/r1.webp')"
            console.log('Image 1')
        }
        if (randNum === 2) {
            document.body.style.backgroundImage = "url('./assets/img/r2.webp')"
            console.log('Image 2')
        }
        if (randNum === 3) {
            document.body.style.backgroundImage = "url('./assets/img/r3.webp')"
            console.log('Image 2')
        }
        if (randNum === 4) {
            document.body.style.backgroundImage = "url('./assets/img/r4.webp')"
            console.log('Image 3')
        }
        if (randNum === 5) {
            document.body.style.backgroundImage = "url('./assets/img/r5.webp')"
            console.log('Image 4')
        }
        if (randNum === 6) {
            document.body.style.backgroundImage = "url('./assets/img/r6.webp')"
            console.log('Image 6')
        }
        if (randNum === 7) {
            document.body.style.backgroundImage = "url('./assets/img/TheWalk_v2.webp')"
            console.log('Image 7')
        }
        if (randNum === 8) {
            document.body.style.backgroundImage = "url('./assets/img/wilderness.webp')"
            console.log('Image 8')
        }
    }
    console.log(lmd)
    if (lmd === 169) {
        let owoButton = document.getElementById("e-btn")
        owoButton.removeAttribute("hidden")
        setTimeout(function() {
            owoButton.href = "https://www.mergegames.com/games/sunnyside/"
        }, 60000)
    }
}