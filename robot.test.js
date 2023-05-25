const { createRobot } = require('./robot.js');

describe('getPosition', () => {
	test('Should return error with message if coordinates are wrong', () => {
		const myRobot = createRobot([3, 5], 'North');
			expect(createRobot([2, 3], 'North').getPosition()).toMatchObject({
      coordinates: [2, 3],
      orientation: 'North',
    });
  });


  test('should return coorditates are rigth', () => {
    expect(createRobot([2, 3], 'North').getPosition()).toMatchObject({
      coordinates: [2, 3],
      orientation: 'North',
    });
  });

  test('Should return place correctly', () => {
    const myRobot = createRobot([5, 3], 'South')
    const result = myRobot.getPosition()
    expect(result).toMatchObject({ coordinates: [5, 3], orientation: 'South' })
  })
});

describe('advance', () => {

  test('Should advance with coordinates [3, 6] and orientation "North" and return coordinate [3, 7]', () => {
    const myRobot = createRobot([3, 6], 'North')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject({ coordinates: [3, 7], orientation: 'North' })
  })

  test('Should advance with coordinates [2, 1] and orientation "South" and return coordinate [3, 0]', () => {
    const myRobot = createRobot([2, 1], 'South')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject({ coordinates: [2, 0], orientation: 'South' })
  })

  test('Should advance with coordinates [9,4] and orientation "East" and return coordinate [10, 4]', () => {
    const myRobot = createRobot([9, 4], 'East')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject({ coordinates: [10, 4], orientation: 'East' })
  })

  test('Should advance with coordinates [6, 7] and orientation "West" and return coordinate [5, 7]', () => {
    const myRobot = createRobot([6, 7], 'West')
    myRobot.advance()
    const result = myRobot.getPosition()
    expect(result).toMatchObject({ coordinates: [5, 7], orientation: 'West' })
  })
})