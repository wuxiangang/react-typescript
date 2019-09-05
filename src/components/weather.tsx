import React from 'react'

interface WeatherProps {
  weather: {
    results: any[],
    city: number
  }
}

const WeatherItem: React.FC<any> = ({ results }) =>  results.length ? (
  <section className='city-weather-info'>
    {
      results.map((v: any, i: number) => {
        return (<div key={ i }>
          {
            v.weather_data.map((w, j) => {
              return (
                <div key={ j }>
                  <div className='city-weather-line'>
                    <span className='city-weather-date'>{ w.date }</span>
                    <span className='city-weather-temperature'>{ w.temperature }</span>
                  </div>
                  <div className='city-weather-line'>
                    <img className='city-weather-img' src={ w.dayPictureUrl } />
                    <span className='city-weather-weather'>{ w.weather }</span>
                  </div>
                </div>
              )
            })
          }
        </div>)
      })
    }
  </section>
) : null


const Weather: React.FC<WeatherProps> = ({ weather }) => (
  <div>
    <header>
      <span className='header-city'>{ weather.city }</span>
    </header>
    <section className='temp-info'>
      { WeatherItem(weather as any) }
    </section>
  </div>
)


export default Weather