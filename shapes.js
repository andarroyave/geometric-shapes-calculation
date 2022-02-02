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

function isoscelesTriangleHeight(side1, side2, base){
    console.log(side1 + '-'+ side2 + '-' + base)
    if(side1 != side2 && base != side1 && base != side2){
        alert("El triangulo no es isosceles");
        console.log("El triangulo no es isosceles")
        return 0;
    }
    console.log(side1 + '-'+ side2 + '-' + base)
    let height = Math.sqrt(side1**2 - (base/2)**2);
    return height;
}

function trianglePerimeter(side1, side2, base){
    return side1 + side2 + base;
}

function triangleArea(side1, side2, base){
    console.log(side1 + '-'+ side2 + '-' + base)
    return (base*isoscelesTriangleHeight(side1, side2, base))/2;
}

//Circle

function circlePerimeter(radius){
    return 2*PI*radius;
}

function circlePerimeter(radius){
    return 2*PI*(radius**2);
}


//Interaccion con HTML

//Square

function calculateSquarePerimeter(){
    const input = document.getElementById("square_input");
    const value = input.value;
    const perimeter = squarePerimeter(value);
    alert(perimeter)

}

function calculateSquareArea(){
    const input = document.getElementById("square_input");
    const value = input.value;
    const area = squareArea(value);
    alert(area)
}

//Triangle

function calculateTrianglePerimeter(){
    const side1 = Number(document.getElementById("TriangleSideA").value);
    const side2 = Number(document.getElementById("TriangleSideB").value);
    const base = Number(document.getElementById("TriangleBase").value);
    const perimeter = trianglePerimeter(side1, side2, base);
    alert(perimeter)

}

function calculateTriangleArea(){
    const side1 = Number(document.getElementById("TriangleSideA").value);
    const side2 = Number(document.getElementById("TriangleSideB").value);
    const base = Number(document.getElementById("TriangleBase").value);
    console.log(side1 + '-'+ side2 + '-' + base)
    const area = triangleArea(side1, side2, base);
    alert(area)
}