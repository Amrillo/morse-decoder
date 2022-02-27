const obj_morse = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr =Array.from(expr);
    let group = [];
    while(arr.length) { 
        let cutx = arr.splice(0,10);
        if (cutx.indexOf("*") != -1) {
        group.push(" ")}
        else {  
            let codes = cutx.slice(cutx.indexOf("1"));
            let morse = ""; 
            while(codes.length) { 
                let code = codes.splice(0,2).join("");
                code == "10" ? morse += "." : morse +="-";
                
            }
            group.push(obj_morse[morse]);
        }
    }

   return group.join("");
}

module.exports = {
    decode
}