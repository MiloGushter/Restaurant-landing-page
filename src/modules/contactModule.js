import { emptyContent } from "./emptyContent";
export default function populateContact() {
  const content = document.querySelector("#content");
  emptyContent();

  const reservationSection = document.createElement("section");
  reservationSection.classList.add("reservation");
  const reservationContainer = document.createElement("div");
  reservationContainer.classList.add("container");
  const reservationTitle = document.createElement("h2");
  reservationTitle.classList.add("reservation-title");
  reservationTitle.textContent = "Need a reservation?";
  const reservationParagraph = document.createElement("p");
  reservationParagraph.classList.add("reservation-para");
  reservationParagraph.textContent =
    "You can either contact us via phone or leave your information about reservation and we will take care for everything else";
  reservationContainer.appendChild(reservationTitle);
  reservationContainer.appendChild(reservationParagraph);

  const reservationForm = document.createElement("from");
  reservationForm.classList.add("reservation-form");
  reservationForm.setAttribute("method", "get");

  const fullNameLabel = document.createElement("label");
  fullNameLabel.textContent = "Full name";
  fullNameLabel.setAttribute("for", "full-name");
  const fullNameInput = document.createElement("input");
  fullNameInput.setAttribute("type", "text");
  fullNameInput.setAttribute("id", "full-name");
  fullNameInput.setAttribute("name", "full-name");

  const phoneNumberLabel = document.createElement("label");
  phoneNumberLabel.setAttribute("for", "phone-number");
  phoneNumberLabel.textContent = "Phone number";
  const phoneNumberInput = document.createElement("input");
  phoneNumberInput.setAttribute("type", "number");
  phoneNumberInput.setAttribute("id", "phone-number");
  phoneNumberInput.setAttribute("name", "phone-number");

  const messageArea = document.createElement("textarea");
  messageArea.setAttribute("name", "message");
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Your message";

  reservationForm.appendChild(fullNameLabel);
  reservationForm.appendChild(fullNameInput);
  reservationForm.appendChild(messageLabel);
  reservationForm.appendChild(messageArea);
  reservationForm.appendChild(phoneNumberLabel);
  reservationForm.appendChild(phoneNumberInput);

  reservationContainer.appendChild(reservationForm);

  reservationSection.appendChild(reservationContainer);
  content.appendChild(reservationSection);
}
