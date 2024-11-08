{
    type Circle = {
        shape: "circle";
        radius: number;
    };
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    };
    type Shape = Circle | Rectangle;

    const calculateShapeArea = (shapeType: Shape): number => {
        if (shapeType.shape === "circle") {
            return Math.PI * shapeType.radius * shapeType.radius;
        } else if (shapeType.shape === "rectangle") {
            return shapeType.width * shapeType.height;
        } else {
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