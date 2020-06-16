const { default: Axios } = require("axios")

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {

    let changeableURL =  url ;

    if(country){
        changeableURL = (`${url}/countries/${country}`)
    }

    try {
        const {data: {confirmed, recovered, deaths, lastUpdate}} = await Axios.get(changeableURL) ;

        return {confirmed, recovered, deaths, lastUpdate} 
    } 
    
    catch (error) {
        console.log(error) ;
    }
}

export const fetchCountryData = async () => {
    const {data: {countries}}= await Axios(`${url}/countries`)
    return countries.map(country => country.name) 
}


export const dailyData = async () => {
    const {data} = await Axios.get(`${url}/daily`) ;

    const modifiedData = data.map(dailyData => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate
    }))
    
    return modifiedData
}
