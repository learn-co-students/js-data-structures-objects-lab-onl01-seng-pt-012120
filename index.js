const driver = {};

function updateDriverWithKeyAndValue(a, b, c) {
    return Object.assign({}, a, {[b]: c});
}

function destructivelyUpdateDriverWithKeyAndValue(a, b, c) {
    return Object.assign(a, {[b]: c});
}

function deleteFromDriverByKey(a, b) {
    const newO = Object.assign({}, a);
    delete newO[b];
    return newO;
}

function destructivelyDeleteFromDriverByKey(a, b) {
    delete a[b];
    return a;
}