import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import Cards from './Cards.css'
import CountUp from 'react-countup'
import { FaSpinner } from 'react-icons/fa'

const cards = ({data}) => {
    console.log(data)
    return (
        <div>
        {data.confirmed ? 
        <Grid container spacing={2} className = 'grid'>
            <Grid item xs={12} sm={3}>
                <Card className = "card1 card">
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5">
                        <CountUp 
                                start = {0}
                                end = {data.confirmed.value}    
                                duration = {2}
                                separator = ","
                            />
                        </Typography>
                        <Typography variant = "h6">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">
                            Number of confirmed COVID-19 cases
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs = {12} sm={3}>
            <Card className = "card2 card">
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant = "h5">
                            <CountUp 
                                start = {0}
                                end = {data.recovered.value}    
                                duration = {2}
                                separator = ","
                            />
                        </Typography>
                        <Typography variant = "h6">{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs = {12} sm={3}>
            <Card className = "card3 card">
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant = "h5">  
                        <CountUp 
                                start = {0}
                                end = {data.deaths.value}    
                                duration = {2}
                                separator = ","
                            /></Typography>
                        <Typography variant = "h6" >{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">
                            Number of deaths caused by COVID-19
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid> : <FaSpinner /> }
        </div>
    ) 
}

export default cards