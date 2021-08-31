import React,{ useEffect, useState } from 'react'
import above_25 from '../components/Images/above-25.jpg'
import zero_10 from '../components/Images/0-10.jpg'
import below_0 from '../components/Images/below-0.jpg'
import rainy from '../components/Images/rainy.jpg'
import axios from 'axios'

// importing icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow, faWind, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Homepage = () => {

    const [ currentTemp, setCurrentTemp ] = useState('')
    const [ currentWind, setCurrentWind ] = useState('')
    const [ currentDate, setCurrentDate ] = useState('')
    const [ currentDay, setCurrentDay ] = useState('')
    const [ currentSkytext, setCurrentSkytext ] = useState('')
    const [ location, setLocation ] = useState('')

    useEffect(()=>{

        axios.get('http://ipinspector.herokuapp.com/')
        .then( res=>{

            // for printing wetaher details sent by the api
            console.log(res.data.weather_forecast[0].current)
            
            setCurrentDay(res.data.weather_forecast[0].current.day)
            setCurrentDate(res.data.weather_forecast[0].current.date)
            setCurrentTemp(res.data.weather_forecast[0].current.temperature)
            setCurrentSkytext(res.data.weather_forecast[0].current.skytext)
            setCurrentWind(res.data.weather_forecast[0].current.winddisplay)
            setLocation(res.data.weather_forecast[0].current.observationpoint)

        })
        .catch(err=>{
            console.log('error')
            // document.querySelector('.result').style.display = 'none'
            // document.querySelector('.error').style.display = 'block'
        })

    },[])

    return (
        <div>
            
            <div className="result" style={{display:'block'}}>
                <div className="container my-3">
                    <div className="card">
                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-6">
                                    <img src={zero_10} style={{height:"70vh", width:'100%', borderRadius:'5px'}} className="img-fluid" alt="..."/>

                                    <div className="row my-2">

                                        <div className="col-md-4">
                                            <div className="card" style={{borderColor:'#ff4d4d'}}>
                                                <div className="card-body">

                                                    <div className="d-flex justify-content-sm-start gap-4" style={{color:'#ff4d4d'}}>
                                                        <FontAwesomeIcon icon={faTemperatureLow} style={{width:'25px', height:'25px'}} />
                                                        <h5>{currentTemp} C</h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card" style={{borderColor:'#ff4d4d'}}>
                                                <div className="card-body">

                                                    <div className="d-flex justify-content-sm-start gap-1" style={{color:'#ff4d4d'}}>
                                                        <FontAwesomeIcon icon={faWind} style={{width:'25px', height:'25px'}} />
                                                        <h5>{currentWind}</h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card" style={{borderColor:'#ff4d4d'}}>
                                                <div className="card-body">

                                                    <div className="d-flex justify-content-sm-start gap-1" style={{color:'#ff4d4d'}}>
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} style={{width:'25px', height:'25px'}} />
                                                        <h5>{location}</h5>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6">

                                    <div className="card">
                                        <div className="card-body">
                                            This is some text within a card body.
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="error" style={{display:'none'}}>
                <div className="container">

                    <div className="alert alert-danger" role="alert">
                        <h4 className="alert-heading">Error</h4>
                        <p>Please try again later! <br/>Right now we can't connect to the network.</p>
                        <hr/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Homepage
