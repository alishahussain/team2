let binaryOutput = document.querySelector('#binary');
let decimalOutput = document.querySelector('#decimal');
let hexOutput = document.querySelector('#hexadecimal');

document.querySelector('#bToD').addEventListener('click', () => convertBit(binaryOutput.value, 'bOutput', 'binary', 'decimal'));
document.querySelector('#bToH').addEventListener('click', () => convertBit(binaryOutput.value, 'bOutput', 'binary', 'hex'));
document.querySelector('#dToB').addEventListener('click', () => convertBit(decimalOutput.value, 'dOutput', 'decimal', 'binary'));
document.querySelector('#dToH').addEventListener('click', () => convertBit(decimalOutput.value, 'dOutput', 'decimal', 'hex'));
document.querySelector('#hToB').addEventListener('click', () => convertBit(hexOutput.value, 'hOutput', 'hex', 'binary'));
document.querySelector('#hToD').addEventListener('click', () => convertBit(hexOutput.value, 'hOutput', 'hex', 'decimal'));

function convertBit(src, output, from, to) {
    switch (from) {
        case 'binary':
            document.getElementById(output).textContent = to === 'decimal' ? binToDec(src) : binToHex(src);
            break;
        case 'decimal':
            document.getElementById(output).textContent = to === 'binary' ? decToBin(src) : decToHex(src);
            break;
        case 'hex':
            document.getElementById(output).textContent = to === 'binary' ? hexToBin(src) : hexToDec(src);
            break;
    }
}

function binToDec(src) {
    let answer = 0;
    let n = 0;
    let srcString = src.toString();
    
    for (let i = srcString.length - 1; i >= 0; i--) {
        answer += srcString[i] * 2 ** n;
        n++;
    }

    return answer;
}

function binToHex(src) {
    const baseMap = {
        '0000': '0',
        '0001': '1',
        '0010': '2',
        '0011': '3',
        '0100': '4',
        '0101': '5',
        '0110': '6',
        '0111': '7',
        '1000': '8',
        '1001': '9',
        '1010': 'A',
        '1011': 'B',
        '1100': 'C',
        '1101': 'D',
        '1110': 'E',
        '1111': 'F'
    };

    let i;
    let answer = '';
    let rem = '';
    const len = 4;
    const srcString = src.toString();

    for (i = srcString.length; i >= len; i -= len) {
        if (i - len < srcString.length) {
            answer = baseMap[srcString.substr(i - len, len)] + answer;
        }
    }
    
    if (i !== 0) {
        rem = srcString.substr(0, i);
        while (rem.length < 4) {
            rem = '0' + rem;
        }
        answer = baseMap[rem] + answer;
    }

    return answer;
}

function decToBin(src) {
    let n = 0;
    let answer = '';

    while (2 ** (n) < src) n++;
    
    for (n; n >= 0; n--) {
        if (2 ** n <= src) {
            answer += '1';
            src = src % 2 ** n;
        } else {
            answer += answer === '' ? '' : '0';
        }
    }
    return answer;
}

function decToHex(src) {
    const baseMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': 'A',
        '11': 'B',
        '12': 'C',
        '13': 'D',
        '14': 'E',
        '15': 'F',
    };

    let n = 0;
    let answer = '';
    const base = 16;

    while (base ** (n + 1) < src) n++;

    for (n; n >= 0; n--) {
        if (base ** n <= src) {
            answer += baseMap[Math.floor(src / base ** n).toString()];
            src = src - Math.floor(src / base ** n) * (base ** n);
        } else {
            answer += '0';
        }
    }
    
    return answer;
}

function hexToBin(src) {
    const baseMap = {
        '0': '0000',
        '1': '0001',
        '2': '0010',
        '3': '0011',
        '4': '0100',
        '5': '0101',
        '6': '0110',
        '7': '0111',
        '8': '1000',
        '9': '1001',
        'A': '1010',
        'B': '1011',
        'C': '1100',
        'D': '1101',
        'E': '1110',
        'F': '1111'
    };

    let srcString = src.toString().toUpperCase();
    let answer = '';

    for (let i = 0; i < srcString.length; i++) {
        answer += baseMap[srcString[i]];
    }
    
    return answer;
}

function hexToDec(src) {
    const baseMap = {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        'A': '10',
        'B': '11',
        'C': '12',
        'D': '13',
        'E': '14',
        'F': '15'
    };

    let srcString = src.toString().toUpperCase();
    let answer = 0;

    for (let i = 0; i < srcString.length; i++) {
        answer += baseMap[srcString[i]] * (16 ** (srcString.length - 1 - i))
    }

    return answer;
}

//TODO: Form validation 