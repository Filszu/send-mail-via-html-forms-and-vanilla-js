//convert query params to object
function searchParams(){

    const queryString = new URLSearchParams(location.search);

    const fsKeyValues = Object.fromEntries(new URLSearchParams(queryString))
    console.log(fsKeyValues);
      
    return fsKeyValues;

}