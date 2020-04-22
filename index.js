// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(obj, key, val){
    
    // let newObj = {}
    let newObj = Object.assign({},obj, {[key]: val})
    // let newObj = {...obj}

    // newObj[`${key}`] = val 
    return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value; 
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let newObj = {...driver}
    
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}