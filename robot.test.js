const { createRobot } = require('./robot.js');

describe('getPosition', () => {
	test('Return error with message coorditates are wrong', () => {
		const myRobot = createRobot([3, 5], 'North');
			expect(createRobot([2, 3], 'North').getPosition()).toMatchObject({
      coordinates: [2, 3],
      orientation: 'North',
    });
  });


  // test('coorditates are rigth', () => {
  //   expect(createRobot([2, 3], 'North').getPosition()).toMatchObject({
  //     coordinates: [2, 3],
  //     orientation: 'North',
  //   });
  // });
});
