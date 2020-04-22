// Write your solution in this file!
const driver={}
function updateDriverWithKeyAndValue(driver, key, value){
    return Object.assign({}, driver, {name: 'Sam', address: '11 Broadway'})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    return Object.assign(driver, {name: 'Sam', address: '12 Broadway'})
}

function deleteFromDriverByKey(driver, key){
    const newObj= Object.assign({}, driver)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}