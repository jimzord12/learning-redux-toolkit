import { expect, test } from 'vitest';
import { idGenerator } from './generators';

const idGen = idGenerator();
test('generates new ID everytime its called', () => {
  new Array(50).fill(0).forEach(() => {
    idGen.next();
  });

  expect(idGen.next().value).toBe(50);
});
