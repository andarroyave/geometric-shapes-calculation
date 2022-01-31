console.log("Shapes")

const PI = Math.PI;

//Squares

function squarePerimeter(side){
    return side*4; 
}

function squareArea(side){
    return side*side;
}

//Triangle

function trianglePerimeter(side1, side2, base){
    return side1 + side2 + base;
}

function triangleArea(height, base){
    return (base*height)/2;
}

//Circle

function circlePerimeter(radius){
    return 2*PI*radius;
}

function circlePerimeter(radius){
    return 2*PI*(radius**2);
}


//Interaccion con HTML

function calculateSquarePerimeter(){
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter)

}

function calculateSquareArea(){
    const input = document.getElementById("SquareInput");
    const value = input.value;
    const area = squareArea(value);
    alert(area)
}