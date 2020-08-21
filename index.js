// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
    //Object.assign({}, obj, {key: value});
    const newObj = {...obj, [key]: value};
    return newObj;
};

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value});
};

function deleteFromDriverByKey(obj, key) {
    const newObject = {...obj};
    delete newObject[key];
    return newObject
};

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;
}
