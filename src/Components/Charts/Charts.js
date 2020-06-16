import React from 'react' ;
import styles from './Charts.css' ;
import {Line, Bar} from 'react-chartjs-2' ;
import { dailyData } from '../api/api';


const Charts = ({country, data}) => {

    const [mydailyData, setmyDailyData] = React.useState([]) ;

    React.useEffect(() => {
        const response = async () => {
            setmyDailyData(await dailyData()) ;

            console.log(mydailyData)
        }

        response()
    }, [])



    const lineChart = (
        mydailyData.length
        ? 
        <Line
            data = {{
                labels: mydailyData.map(({ date }) => date),
                datasets: [{
                    label: 'Infected',
                    data: mydailyData.map(({ confirmed }) => confirmed),
                    fill: true,
                    borderColor: '#3333ff',
                }, 
                {
                    label: 'Deaths',
                    data: mydailyData.map(({ deaths }) => deaths),
                    fill: true,
                    borderColor: '#3333ff',
                    backgroundColor: 'rgba(255, 0, 0,.5)'
                }]
            }}
        />
        : null 
    )

    const barChart = (
        data.confirmed ?
        <Bar 
            data = {{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, .5)',
                        'rgba(0, 255, 0, .5)',
                        'rgba(255, 0, 0, .5)',
                    ],
                    data: [data.confirmed.value, data.recovered.value, data.deaths.value]
                }]
            }}
            options = {{
                legend: {display: false},
                title: {display: true, text: `Current state in ${country}`}
            }}
        /> : null
    )

    return (
        <div className = "charts">
            {country ? barChart : lineChart}
        </div>
    )
}

export default Charts