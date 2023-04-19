import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨 상태
// 3. 5개의 버튼이 있다.(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭할 때 마다 도시별 날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

const cities = ["Paris","New York","Tokyo","Seoul"];
const API_KEY = "e3025128cf341ccc3d08e1eb61596dbc";

function App() {

  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [apiError, setAPIError] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      setWeather(data);
      setLoading(false);
      // console.log(data);
    } catch (err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }
  
  const getWeatherByCity = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);
      const data = await res.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setAPIError(err.message);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    if (city == null) {
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading ? (
        <div className='container'>
          <ClipLoader color="#4169e1" loading={loading} size={150} />
        </div>
      ) : !apiError ? (
        <div className='container'>
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} handleCityChange={handleCityChange} selectedCity={city} />
        </div>
      ) : (
        apiError
      )}
    </div>
  );
}

export default App;