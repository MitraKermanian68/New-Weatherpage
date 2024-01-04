const form = document.querySelector(".weather-container form");
const input = document.querySelector(".weather-container input");
const msg = document.querySelector(".weather-container .msg");
const weatherCard = document.querySelector(".weather-card");

const apiKey = "7917851c6e167253da05e428e0c19b26";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      weatherCard.style.display = "block";
      wa_name.innerHTML = name;
      wa_country.innerHTML = sys.country;
      wa_city_temp.innerHTML = Math.round(main.temp);
      wa_temp_icon.innerHTML = icon;
      wa_temp_caption.innerHTML = weather[0]["description"];
    })
    .catch(() => {
      msg.textContent = "Please enter a valid city name";
    });
  msg.textContent = "";
});
