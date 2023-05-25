function createRobot(coordinates, orientation) {
  const moves = ['R', 'A', 'L'];
  const directions = ['North', 'East', 'South', 'West'];
  let [ x, y ] = coordinates;

  function getPosition() {
    try {
      if (x > 10 || x < 0 || y > 10 || y < 0) {
        throw new Error('Out of limits');
      }
      return { coordinates: [x, y], orientation };
    } catch (error) {
      return error.message;
    }
  }
  function advance() {
    switch (orientation) {
      case 'North':
        y += 1;
        break;
      case 'East':
        x += 1;
        break;
      case 'South':
        y -= 1;
        break;
      case 'West':
        x -= 1;
        break;
    }
  }

  function turnRight() {
    switch (orientation) {
      case 'North':
        orientation = 'East';
        break;
      case 'East':
        orientation = 'South';
        break;
      case 'South':
        orientation = 'West';
        break;
      case 'West':
        orientation = 'North';
        break;
    }
  }
  function turnLeft() {
    switch (orientation) {
      case 'North':
        orientation = 'West';
        break;
      case 'East':
        orientation = 'North';
        break;
      case 'South':
        orientation = 'East';
        break;
      case 'West':
        orientation = 'South';
        break;
    }
  }

  function instructions(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case 'R':
          turnRight();
          break;
        case 'A':
          advance();
          break;
        case 'L':
          turnLeft();
          break;
      }
    }
  }
  return {
    getPosition,
    advance,
    turnRight,
    turnLeft,
    instructions,
  };
}

module.exports = { createRobot };

const robot = createRobot([6, 5], 'South');
const guide = 'RAALAL';
robot.instructions(guide);
console.log(robot.getPosition());

