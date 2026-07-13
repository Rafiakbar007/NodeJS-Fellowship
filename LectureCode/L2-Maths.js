

function add (a,b) {
    return a + b
}

function sub (a,b) {
    return a-b
}

function mul(a,b) {
    return a*b
}

function div(a,b) {
    return a/b
}

function square(a) {
    return a*a
}

module.exports = {
    addFun: add,
    subFun: sub,
    mulFun: mul,
    divFun: div,
    squareFun: square,
}