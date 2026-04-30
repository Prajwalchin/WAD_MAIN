const weatherData = {
    pune: {
        temperature: "28°C",
        humidity: "65%",
        condition: "Cloudy"
    },
    mumbai: {
        temperature: "31°C",
        humidity: "78%",
        condition: "Humid"
    },
    delhi: {
        temperature: "35°C",
        humidity: "45%",
        condition: "Sunny"
    },
    bangalore: {
        temperature: "24°C",
        humidity: "60%",
        condition: "Pleasant"
    },
    chennai: {
        temperature: "33°C",
        humidity: "80%",
        condition: "Hot & Humid"
    }
};

function getWeather() {
    const city = document.getElementById("city").value.trim().toLowerCase();

    $("#result").hide();

    setTimeout(function () {
        if (weatherData[city]) {
            const data = weatherData[city];

            $("#result").html(`
                <h3>${city.toUpperCase()}</h3>
                <p><strong>Temperature:</strong> ${data.temperature}</p>
                <p><strong>Humidity:</strong> ${data.humidity}</p>
                <p><strong>Condition:</strong> ${data.condition}</p>
            `);
        } else {
            $("#result").html(`
                <p class="error">City not found in repository!</p>
            `);
        }

        $("#result").fadeIn();
    }, 1000);
}