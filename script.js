//your JS code here. If required.
 function updateTime() {
      const timerElement = document.getElementById("timer");
      const currentDate = new Date();

      const options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        year: "numeric",
        month: "numeric",
        day: "numeric"
      };

      const formattedDate = currentDate.toLocaleString(undefined, options);
      timerElement.textContent = formattedDate;
    }

    // Update the time every second (1000 milliseconds)
    setInterval(updateTime, 1000);