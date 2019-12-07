function throwError(msg) {
    throw new Error(msg);
}
function inifintLoop() {
    while (true) { }
}
function failed() {
    return throwError('Deu ruim');
}
failed();
