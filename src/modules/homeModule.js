import { emptyContent } from "./emptyContent";
import coverImage from "../img/Cover.jpg";

export default function populateHome() {
  const content = document.querySelector("#content");

  //   Landing image
  const divImage = document.createElement("div");
  divImage.classList.add("landing-image");
  emptyContent();
  const landingImage = document.createElement("img");
  landingImage.src = coverImage;
  landingImage.classList.add("landing-image");
  divImage.appendChild(landingImage);
  content.appendChild(divImage);

  //   Welcome section
  const welcomeSection = document.createElement("section");
  welcomeSection.classList.add("welcome-section");
  const welcomeContainer = document.createElement("div");
  welcomeContainer.classList.add("container");
  const welcomeText = document.createElement("div");
  welcomeText.classList.add("welcome-text");
  const welcomeTitle = document.createElement("h2");
  welcomeTitle.textContent = "Welcome to the Pasta House";
  welcomeTitle.classList.add("welcome-title");
  const welcomePara = document.createElement("p");
  welcomePara.textContent =
    "Here we prepare some of the best pasta the world has ever seen! Come and see it for yourself!";
  welcomePara.classList.add("welcome-paragraph");
  welcomeText.appendChild(welcomeTitle);
  welcomeText.appendChild(welcomePara);
  welcomeContainer.appendChild(welcomeText);
  welcomeSection.appendChild(welcomeContainer);
  content.appendChild(welcomeSection);

  //   Working hours section
  const workTimeSection = docuemnt.CreateElemnt("section");
  const workingHoursContainer = document.createElement("div");
  workingHoursContainer.classList.add("container");
  workTimeSection.classList.add("working-hours");
  const workTimeTitle = doucment.createElement("h2");
  workTimeTitle.textContent = "-Our working hours-";
  workTimeTitle.classList.add("working-hours-title");
}
