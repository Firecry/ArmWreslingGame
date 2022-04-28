let sila = 500000
let klik = 100
let trudnosc = 0
var msec = 0
var sec = '0' + 0
var min = '0' + 0

function ups(){
        setInterval(()=>{
            sila = sila + trudnosc
        }, 1000)
        sila = sila - klik
        klik = klik + 29
        trudnosc++
}

setInterval(()=>{
    msec++

    if(msec==100){
        msec = 0
        sec++
        if(sec<10){
            sec = '0' + sec
        }
    }
    if(sec==60){
        sec = 0
        min++
        if(sec<10){
            sec = '0' + sec
        }
        if(min<10){
            min = '0' + min
        }
    }
    if(min==60){
        sec = 0
        sec = 0
        min = 0
        if(sec<10){
            sec = '0' + sec
        }
        if(min<10){
            min = '0' + min
        }
    }


    if(msec<10){
        msec = msec + '0'
    }

let time = `${min}:${sec}:${msec}`

let objective = sila / 1000000 * 100
let result = parseFloat(objective).toFixed(0)

if(result>=90||result<=0){

}
else{
    document.getElementById('img').style.transform = `rotateX(${result}deg)`
}

if(result>66){
    document.getElementById('objective').style.background = "red"
}
else if(result<33){
    document.getElementById('objective').style.background = "lime"
}
else{document.getElementById('objective').style.background = "orange"}

document.getElementById('objective').style.width = `${sila / 1000000 * 100}vh`
document.getElementById('clicker').innerHTML = `Strength: ${trudnosc}`
document.getElementById('timer').innerHTML = `${time}`

if(sila >= 1000000){
    document.getElementById('ending').style.display = "inherit"
    document.getElementById('grid').style.filter = "blur(2px)"
    document.getElementById('clicker').removeAttribute("onclick");
    document.getElementById('objective').style.display = "none"
    document.getElementById('ending').innerHTML = `You lost this one D: Good luck next time! Time: ${time}`
    sila = 0
}
else if(sila<=0){
    document.getElementById('ending').style.display = "inherit"
    document.getElementById('grid').style.filter = "blur(2px)"
    document.getElementById('clicker').removeAttribute("onclick");
    document.getElementById('objective').style.display = "none"
    document.getElementById('ending').innerHTML = `Congrats! You Won this fight :D Time: ${time}`
    sila = 0
}

}, 10)