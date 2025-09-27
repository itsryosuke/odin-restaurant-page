export default function loadContact() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const contactPage = document.createElement("div");
    contactPage.id = "page_content";
    const contactPageHeader = document.createElement("h1");
    contactPageHeader.textContent = "Contact Us";
    contactPage.appendChild(contactPageHeader);

    const contactSection = document.createElement("div");
    contactSection.classList.add("section");
    const contactHeader = document.createElement("h2");
    contactHeader.textContent = "Tonio Trussardi";
    const contactOccupation = document.createElement("p");
    contactOccupation.textContent = "Professional Chef";
    const contactNumber = document.createElement("p");
    contactNumber.textContent = "+81350506060";
    const contactMail = document.createElement("p");
    contactMail.textContent = "toniotrussardi@jojomail.jp";
    contactSection.appendChild(contactHeader);
    contactSection.appendChild(contactOccupation);
    contactSection.appendChild(contactNumber);
    contactSection.appendChild(contactMail);
    contactPage.appendChild(contactSection);

    content.appendChild(contactPage);
}