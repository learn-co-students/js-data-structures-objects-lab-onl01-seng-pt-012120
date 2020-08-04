// Write your solution in this file!

const driver = {}

//   1) drivers
//   updateDriverWithKeyAndValue(driver, key, value)
//     "before each" hook for "returns a driver with the original key value pairs and the new key value pair":
// function nondestructivelyUpdateObject(obj, key, value) {
//     return Object.assign({}, obj, { [key]: value });



function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
  }


//   destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
//   updates `driver` with the given `key` and `value` (it is destructive) and returns the entire updated driver:
// function destructivelyUpdateObject (obj, key, value) {
//     obj[key] = value;
   
//     return obj;
//   }


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
       
         return driver;
       }

    //    deleteFromDriverByKey(driver, key)
    //    deletes `key` from a clone of driver and returns the new driver (it is non-destructive):
   

    
   
    function deleteFromDriverByKey(driver, key) {
        const newDriver = Object.assign({}, driver);
        delete newDriver[key]
        
        return newDriver  
    }

    
    //    destructivelyDeleteFromDriverByKey(driver, key)
    //      returns driver without the delete key/value pair:



   function  destructivelyDeleteFromDriverByKey(driver, key) {
        delete driver[key]

        return driver 
    }