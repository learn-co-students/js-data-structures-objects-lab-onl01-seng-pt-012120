const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(obj, key){
    let updatedDriver = Object.assign({}, obj);
  
    delete updatedDriver[key];
    return updatedDriver;
}
  
function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key];
    return obj;
}