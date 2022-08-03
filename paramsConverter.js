//convert query params to object
function searchParams(queryString = new URLSearchParams(location.search)){
//default valuefrom web adress

    const fsKeyValues = Object.fromEntries(new URLSearchParams(queryString))
    console.log(fsKeyValues);
      
    return fsKeyValues;

}