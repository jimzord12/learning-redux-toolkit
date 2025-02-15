export function* idGenerator() {
  let i = 0;

  while (true) {
    yield i++;
  }
}
