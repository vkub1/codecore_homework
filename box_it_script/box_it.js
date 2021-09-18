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

function drawMiddleBorder(num) {
    if (num === 0) {
        return '┣┫';
    } else {
        return '┣' + drawLine(num-2) + '┫';
    }
}

function drawBottomBorder(num) {
    if (num === 0) {
        return '┗┛';
    } else {
        return '┗' + drawLine(num-2) + '┛';
    }
}

function drawBarsAround(str) {
    return `┃${str}┃`;
}

function boxIt(arr) {
    if (arr.length === 0) {
        return drawTopBorder(0) + "\n" + drawBottomBorder(0);
    }
    else {
        let max = arr[0].length;
        let result = ""
        for (let name of arr) {
            if (name.length > max) {
                max = name.length;
            }
        }
        result += drawTopBorder(max+2) + "\n" 
        for (let i=0; i < arr.length; i++) {
            let namestr = arr[i] + " ".repeat(max-arr[i].length);
            if (i === arr.length -1) {
                result += drawBarsAround(namestr) + "\n" + drawBottomBorder(max+2);
            } else {
                result += drawBarsAround(namestr) + "\n" + drawMiddleBorder(max+2) + "\n"
            }
        }
        return result;
    }
    
}

process.argv.shift();
process.argv.shift();
console.log(boxIt(process.argv));
