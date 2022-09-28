let _1 = 0
let _2 = 0
let _3 = 0
let mayor = 0
let medio = 0
let manor = 0
input.onButtonPressed(Button.A, function () {
    if (_1 == 0 && _2 == 0) {
        basic.showIcon(IconNames.No)
    } else {
        if (_1 > _2 && _1 > _3) {
            mayor = _1
            if (_2 > _3) {
                medio = _2
                manor = _3
            } else {
                manor = _2
                medio = _3
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    _1 = randint(0, 9)
    _2 = randint(0, 9)
    _3 = randint(0, 9)
    if (_1 != _2 && (_2 != _3 && _1 != _3)) {
        basic.showIcon(IconNames.Yes)
        basic.showNumber(_1)
        basic.showNumber(_2)
        basic.showNumber(_3)
    } else {
        basic.showIcon(IconNames.No)
        _1 = 0
        _2 = 0
        _3 = 0
    }
})
