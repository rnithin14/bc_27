export const getArrayFromObject = (response:any, searchResult: string[]) => {
    const tempResult: string[] = [];
    for (let city of response) {
        for (let searchValue of searchResult) {
            if (city.name == searchValue) {
            tempResult.push(city.aqiValue);
            }
        }
    }
    return tempResult
}

