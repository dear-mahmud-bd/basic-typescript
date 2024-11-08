"use strict";
{
    const calculateShapeArea = (shapeType) => {
        if (shapeType.shape === "circle") {
            return Math.PI * shapeType.radius * shapeType.radius;
        }
        else if (shapeType.shape === "rectangle") {
            return shapeType.width * shapeType.height;
        }
        else {
            throw new Error('invalid input');
        }
    };
    // const circleArea = calculateShapeArea({
    //     shape: "circle",
    //     radius: 5
    // });
    // console.log(circleArea);
    // const rectangleArea = calculateShapeArea({
    //     shape: "rectangle",
    //     width: 4,
    //     height: 6
    // });
    // console.log(rectangleArea);
}
