const driver = {}

function updateDriverWithKeyAndValue(driver, key, value){

  return  Object.assign({}, driver, {[key]:value})
 
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){

    return Object.assign(driver, {[key]:value})
}


function deleteFromDriverByKey(driver, key){
  let driver1 =   Object.assign({}, driver)
    delete driver1[key]
    return driver1
}


function destructivelyDeleteFromDriverByKey(driver, key){
        const driver3 = delete driver[key]
    
        return driver
}







// function updateDriverWithKeyAndValue(driver, key, value){
//  return Object.assign({}, driver,{[key]: value})
// }

// function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
//     driver[key] = value;
//     return driver;
// }

// function deleteFromDriverByKey(driver, key){
//  let driver1 = Object.assign({}, driver)

//   delete driver1[key]

//   return driver1
// }

// function destructivelyDeleteFromDriverByKey(driver, key){
//     const driver3 = delete driver[key]

//     return driver
// }








