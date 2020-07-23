/*The ConvictionProvider component will fetch those crimes an 
export a useConvictions() method for other components to import. */

let crimes = []

export const useCrimes = () => {
    return crimes.slice()
}

export const getCrimes = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(parsedCrimes => {
            crimes = parsedCrimes
        })
}