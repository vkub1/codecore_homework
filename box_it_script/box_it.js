function drawLine(num) {
    return "━".repeat(num);
}

function drawTopBorder(num) {
    if (num === 0) {
        return '┏┓';
    } else {
        return '┏' + drawLine(num-2) + '┓';
    }
}



console.log(drawLine(0));
console.log(drawTopBorder(2));
