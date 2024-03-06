function fetchRollNumbers(evt, apiName) {
  let apiUrl;
  switch (apiName) {
    case "assignments":
      apiUrl =
        "https://smartcoverbuilder.000webhostapp.com/getAssignmentRoll.php";
      break;
    case "labs":
      apiUrl =
        "https://smartcoverbuilder.000webhostapp.com/getLabCoverRoll.php";
      break;
    case "labGroups":
      apiUrl =
        "https://smartcoverbuilder.000webhostapp.com/getLabGroupCoverRoll.php";
      break;
    default:
      console.error("Unknown API name");
      return;
  }

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const gridContainer = document.getElementById("rollsGrid");
      const headingElement = document.querySelector("h1");
      gridContainer.innerHTML = "";
      data.forEach((roll) => {
        const gridItem = document.createElement("div");
        gridItem.textContent = roll;
        gridContainer.appendChild(gridItem);
      });
      headingElement.textContent = `Roll Numbers - Count: ${data.length}`;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });

  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tablinks").click();
});
