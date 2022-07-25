let units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
let counter = 0;

function byteToLegible(number, precision = 3) {
    if (number >= 1000) {
        counter++;
        let newNumber = number / 1000;
        return byteToLegible(newNumber, precision);
    } else {
        return `${number.toPrecision(precision + 1)}${units[counter]}`;
    }
}

let newnumber = byteToLegible(1012300000036, 2);
console.log(newnumber);