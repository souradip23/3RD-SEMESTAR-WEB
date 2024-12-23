let length = 8;
for (let row = 0; row < length; row++) {
    let line = "";
    for (let col = 0; col < length; col++) {
        if ((row % 2 === 0 && col % 2 === 0) || (row % 2 === 1 && col % 2 === 1)) {
            line += "*";
        } else {
            line += "#";
        }
    }
    console.log(line);
}
