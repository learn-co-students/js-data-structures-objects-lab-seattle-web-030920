// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
    let newOb = Object.assign({}, driver);
    delete newOb[key];
    return newOb
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}
