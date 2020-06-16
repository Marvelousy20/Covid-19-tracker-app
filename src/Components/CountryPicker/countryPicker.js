import React from 'react'
import { FormControl, NativeSelect } from '@material-ui/core'
import styles from './countryPicker.css'

const countryPicker = ({countries, handleSelect, country}) => {

    const handleChange = (e) => {
        handleSelect(e.target.value)
    } 
    
    console.log(countries)
    return (
        countries.length > 1 ?
        <div className= 'cp'>
            <FormControl className = "form">
                <NativeSelect defaultValue = "" onChange = {handleChange}>
                    <option value= "">Global</option>
                    {countries.map((country, index) => <option key={index} value={country}>
                    {country}
                    </option> )}
                </NativeSelect>
            </FormControl> 
        </div> : null
    )
}

export default countryPicker