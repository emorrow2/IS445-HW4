
console.log('Hello World');

document.addEventListener('keydown', inflate);
document.addEventListener('keydown', feedback);

function feedback() {
    console.log('you pressed a key')
}
/*balloonp.addEventListener('keydown', deflate);*/

function inflate() {
    var infCode = event.keyCode;
    var size = document.getElementById("balloonp").style.fontSize;
    if (infCode == 73) {
        console.log('e was pressed');
        if (parseInt(size) > 60) {
            document.getElementById("balloonp").innerHTML = '💥';
            document.removeEventListener('keydown', inflate);
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