async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "b18266e3e7dc49b3eff1e6c66e43a44c"; // Your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const weatherCard = document.getElementById("weatherCard");
  const errorMsg = document.getElementById("error");
  weatherCard.classList.add("hidden");
  errorMsg.textContent = "";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      errorMsg.textContent = "❌ City not found. Try again.";
      return;
    }

    // Update card elements
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `🌡 Temperature: ${data.main.temp}°C`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
    document.getElementById("description").textContent = `☁ ${data.weather[0].description}`;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    weatherCard.classList.remove("hidden");
  } catch (error) {
    errorMsg.textContent = "⚠️ Error fetching weather data.";
  }
}


