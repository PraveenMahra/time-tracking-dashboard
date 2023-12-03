document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  const dailyItem = document.querySelector(".navbar li:nth-child(1)");
  const weeklyItem = document.querySelector(".navbar li:nth-child(2)");
  const monthlyItem = document.querySelector(".navbar li:nth-child(3)");

  const workTime = document.querySelector(".work-time");
  const playTime = document.querySelector(".play-time");
  const studyTime = document.querySelector(".study-time");
  const exerciseTime = document.querySelector(".exercise-time");
  const socialTime = document.querySelector(".social-time");
  const selfCareTime = document.querySelector(".self-care-time");

  const workPreviousTime = document.querySelector(".work-previous-time");
  const playPreviousTime = document.querySelector(".play-previous-time");
  const studyPreviousTime = document.querySelector(".study-previous-time");
  const exercisePreviousTime = document.querySelector(
    ".exercise-previous-time"
  );
  const socialPreviousTime = document.querySelector(".social-previous-time");
  const selfCarePreviousTime = document.querySelector(
    ".self-care-previous-time"
  );

  // Initialize with the "Daily" item selected
  updateTimes("Daily");
  updateSelected(dailyItem);

  // Add click event listeners
  dailyItem.addEventListener("click", function () {
    updateTimes("Daily");
    updateSelected(dailyItem);
  });

  weeklyItem.addEventListener("click", function () {
    updateTimes("Weekly");
    updateSelected(weeklyItem);
  });

  monthlyItem.addEventListener("click", function () {
    updateTimes("Monthly");
    updateSelected(monthlyItem);
  });

  // Function to update times based on selected interval
  function updateTimes(interval) {
    switch (interval) {
      case "Daily":
        workTime.textContent = "5hrs";
        playTime.textContent = "1hrs";
        studyTime.textContent = "0hrs";
        exerciseTime.textContent = "1hrs";
        socialTime.textContent = "1hrs";
        selfCareTime.textContent = "0hrs";

        workPreviousTime.textContent = "Last-Day - 7hrs";
        playPreviousTime.textContent = "Last-Day - 2hrs";
        studyPreviousTime.textContent = "Last-Day - 1hrs";
        exercisePreviousTime.textContent = "Last-Day - 1hrs";
        socialPreviousTime.textContent = "Last-Day - 3hrs";
        selfCarePreviousTime.textContent = "Last-Day - 1hrs";
        break;

      case "Weekly":
        workTime.textContent = "32hrs";
        playTime.textContent = "10hrs";
        studyTime.textContent = "4hrs";
        exerciseTime.textContent = "4hrs";
        socialTime.textContent = "5hrs";
        selfCareTime.textContent = "2hrs";

        workPreviousTime.textContent = "Last-Week - 36hrs";
        playPreviousTime.textContent = "Last-Week - 8hrs";
        studyPreviousTime.textContent = "Last-Week - 7hrs";
        exercisePreviousTime.textContent = "Last-Week - 5hrs";
        socialPreviousTime.textContent = "Last-Week - 10hrs";
        selfCarePreviousTime.textContent = "Last-Week - 2hrs";
        break;

      case "Monthly":
        workTime.textContent = "103hrs";
        playTime.textContent = "23hrs";
        studyTime.textContent = "13hrs";
        exerciseTime.textContent = "11hrs";
        socialTime.textContent = "21hrs";
        selfCareTime.textContent = "7hrs";

        workPreviousTime.textContent = "Last-Month - 128hrs";
        playPreviousTime.textContent = "Last-Month - 29hrs";
        studyPreviousTime.textContent = "Last-Month - 19hrs";
        exercisePreviousTime.textContent = "Last-Month - 18hrs";
        socialPreviousTime.textContent = "Last-Month - 23hrs";
        selfCarePreviousTime.textContent = "Last-Month - 11hrs";
        break;

      default:
        break;
    }
  }

  function updateSelected(selectedItem) {
    dailyItem.classList.remove("selected");
    weeklyItem.classList.remove("selected");
    monthlyItem.classList.remove("selected");

    selectedItem.classList.add("selected");
  }
});
