import { exercise1, exercise2, exercise3, exercise4, exercise5 } from '~index';

test('exercise1', () => {
  expect(exercise1('2023-04-05')).toMatchInlineSnapshot(`"05 Apr 2023"`);
});

test('exercise2', () => {
  expect(exercise2('2023-04-06T00:00:00.000Z')).toMatchInlineSnapshot(
    `"06 Apr 2023 03:00:00"`
  );
});

test('exercise3', () => {
  expect(exercise3('2023-04-07T10:35')).toMatchInlineSnapshot(
    `"07 Apr 2023 15:35:00"`
  );
});

test('exercise4', () => {
  expect(exercise4('2023-04-07T10:35')).toMatchInlineSnapshot(
    `"09 Apr 2023 10:35:00"`
  );
});

test('exercise5', () => {
  expect(exercise5('2023-04-07T00:00')).toMatchInlineSnapshot(
    `"07 Dec 2022 00:00:00"`
  );
});
