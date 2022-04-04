var screen = $("#result");
var x = 0;
var dot = 0;
var result = 0;

function getValue(number) {
    if (x == 1) {
        cls();
        x = 0;
    }
    var existNumber = screen.val();
    screen.val(existNumber + number)
}
function oparetor(number) {
    var existNumber = screen.val();
    screen.val(existNumber + number)
    dot = 1;
}
function getDotValue() {
    var existNumber2 = screen.val();
    if (!screen.val().includes('.') || screen.val() == 0 || screen.val() == '')
        dot = 1;
    if (dot == 1) {
        screen.val(existNumber2 + '.')
        dot = 0;
    }
}
function cls() {
    screen.val('')
}
function caculate() {
    result = eval(screen.val())
    screen.val(result);
    x = 1;
}
function del() {
    var onScreen1 = screen.val();
    if (onScreen1 != '') {
        screen.val(screen.val().slice(0, -1));
    }

}
function ans() {
    screen.val(result)
    x = 0;
}
function changeSign() {
    var onScreen3 = screen.val();
    screen.val(onScreen3 * (-1))
}

