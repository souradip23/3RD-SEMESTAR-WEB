   

//Rectangle


const calculateRectangle = (length, w, callback) => {
    const area = length * w;
    const perimeter = 2 * (length + w);
    callback({ area, perimeter });
};

//CIrcle


const calculateCircle = (r, callback) => {
    const area = Math.PI * r* r;
    const perimeter = 2 * Math.PI * r;
    callback({ area, perimeter });
};



//Triangle



const calculateTriangle = (base, height, a, b, c, callback) => {
    const area = 0.5 * base * height;
    const perimeter = a + b + c;
    callback({ area, perimeter });
};

//resulte
calculateRectangle(10, 5, result => {
    console.log('Rectangle:', result);
});

calculateCircle(7, result => {
    console.log('Circle:', result);
});

calculateTriangle(6, 8, 5, 6, 7, result => {
    console.log('Triangle:', result);
});
