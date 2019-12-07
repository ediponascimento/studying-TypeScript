function throwError(msg: string): never {
  throw new Error(msg);
}

function inifintLoop(): never {
  while (true) {}
}

function failed() {
  return throwError('Deu ruim');
}

failed();