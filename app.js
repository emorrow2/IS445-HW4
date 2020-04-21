
console.log('Hello World');

document.addEventListener('keydown', inflate);
document.addEventListener('keydown', deflate);
document.addEventListener('keydown', feedback);

function feedback() {
    var pressCode = event.keyCode;
    if (pressCode == 73) {
        console.log('i was pressed');
    }
    else if (pressCode == 68) {
        console.log('d was pressed');
    }

    console.log('you pressed a key')
}
/*balloonp.addEventListener('keydown', deflate);*/

function inflate() {
    var infCode = event.keyCode;
    var size = document.getElementById("balloonp").style.fontSize;
    if (infCode === 73) {
        if (parseInt(size) > 60) {
            document.getElementById("balloonp").innerHTML = '💥';
            document.removeEventListener('keydown', inflate);
            document.removeEventListener('keydown', deflate);
            /*document.removeEventListener('keydown', deflate)*/
        }
        else {
            if (size == "") {
                size = 30;
            }
            var inflateStep = parseInt(size) + 10;
            document.getElementById('balloonp').style.fontSize = inflateStep.toString() + 'px';
        }
    }
}

function deflate() {
    var infCode = event.keyCode;
    var size = document.getElementById('balloonp').style.fontSize;
    if (infCode === 68) {
        if (parseInt(size) <= 0) {
            document.getElementById('balloonp').innerHTML = 'Done';
            document.removeEventListener('keydown', deflate);
            document.removeEventListener('keydown', inflate);
            console.log('0px text says done, you just can not see it');
        }
        else {
            if (size == '') {
                size = 30
            }
            var deflateStep = parseInt(size) - 10;
            document.getElementById('balloonp').style.fontSize = deflateStep.toString() + 'px';
        }
    }
}