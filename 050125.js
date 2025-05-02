  // CHALLENGE NAME-  Geometry Basics: Circle Area in 2D

    // DESCRIPTION:

    // This series of katas will introduce you to basics of doing 
    // geometry with computers.

    // Write the function circleArea/CircleArea which takes in a 
    // Circle object and calculates the area of that circle.
    // The Circle class can be seen below:
    
    // // Represents a Circle where center is a Point and radius 
    // // is a Number
    // class Circle {
    //   constructor(center, radius) { 
    //     this.center = center; 
    //     this.radius = radius;
    //   }
    // }
    // And the Point class can be seen below:
    
    // // Represents a Point where x and y are Numbers
    // class Point {
    //   constructor (x,y) { 
    //     this.x = x;
    //     this.y = y; 
    //   }
    // }

    // // ***STARTER CODE***

    // function circleArea(circle){
       
    //     // your code here
    //   }    

    // //   ******TEST CASES*****
    
    // describe('Testing circleArea', () => {
    //     const {assert} = require('chai')
        
    //     const formatCircle = circle =>
    //       `new Circle(new Point(${circle.center.x}, ${circle.center.y}), ${circle.radius})`
        
    //     const doTest = (circle, expected) =>
    //       it(formatCircle(circle), () => assert.approximately(circleArea(circle), expected, 1e-6))
        
    //     describe('Basic tests', () => {
    //       doTest(new Circle(new Point(10, 10), 30), 2827.433388)
    //       doTest(new Circle(new Point(25, -70), 30), 2827.433388)
    //       doTest(new Circle(new Point(-15, 5), 0), 0)
    //       doTest(new Circle(new Point(-15, 5), 12.5), 490.873852)
    //     })
    //   })

    // ******MY ANSWER********

function circleArea(circle){
    return Math.PI * circle.radius**2
    // your code here
  }