// Write your solution in this file!
let updateDriverWithKeyAndValue = (o,k,v) => {
    const newDriver = Object.assign({},o);
    newDriver[k] = v; 
    return newDriver;
};

let destructivelyUpdateDriverWithKeyAndValue = (o,k,v) =>{
    o[k] = v;
    return o;
};

let deleteFromDriverByKey = () => {
    
};

let destructivelyDeleteFromDriverByKey = () => {

};