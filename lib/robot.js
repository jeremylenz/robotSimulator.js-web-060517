'use strict';

let directions = ['east', 'south', 'west', 'north']

function Robot() {
  // implement your solution here!
  this.bearing = 'south'
  this.coordinates = [3,3]
}

Robot.prototype.orient = function(arg) {
  if(directions.includes(arg)) {
  this.bearing = arg
} else {
  throw new Error('Invalid Robot Bearing')
};
}

Robot.prototype.turnRight = function() {
  let currentDirectionIndex = directions.indexOf(this.bearing)
  if(currentDirectionIndex === directions.length - 1) {
    currentDirectionIndex = 0
  } else {
    currentDirectionIndex++
  }
  this.bearing = directions[currentDirectionIndex]
  }

  Robot.prototype.turnLeft = function() {
    let currentDirectionIndex = directions.indexOf(this.bearing)
    if(currentDirectionIndex === 0) {
      currentDirectionIndex = directions.length - 1
    } else {
      currentDirectionIndex--
    }
    this.bearing = directions[currentDirectionIndex]
    }

  Robot.prototype.at = function(x, y) {
    this.coordinates = [x, y]
  }

  Robot.prototype.advance = function() {
    switch (this.bearing) {
      case 'east':
        this.coordinates[0]++
        break;
      case 'south':
        this.coordinates[1]--
        break;
      case 'west':
        this.coordinates[0]--
        break;
      case 'north':
        this.coordinates[1]++
        break;


    }
  }

  Robot.prototype.instructions = function(arg) {
    let ret = []
    let ltrArray = arg.split('')
  //   debugger;
    ltrArray.forEach(function(ltr) {
      switch (ltr) {
        case 'L':
        ret.push("turnLeft")
        break;
        case 'R':
        ret.push("turnRight")
        break;
        case 'A':
        ret.push("advance")
        break;
      }
    })
    return ret
  }

  Robot.prototype.place = function(arg) {
    debugger
    this.orient(arg.direction)
    this.at(arg.x, arg.y)

  }

  Robot.prototype.evaluate = function(arg) {
    let instructionsArray = this.instructions(arg)
    console.log(this)
    instructionsArray.forEach(instruction=>{
      let theRobot = this
      theRobot[instruction]()
    })
  }
