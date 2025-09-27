export default function loadMenu() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const menuPage = document.createElement("div");
    menuPage.id = "page_content";
    const menuPageHeader = document.createElement("h1");
    menuPageHeader.textContent = "Menu";
    menuPage.appendChild(menuPageHeader);

    const section = document.createElement("div");
    section.classList.add("section");
    const sectionText = document.createElement("p");
    sectionText.textContent = "Menu? A list of food? I'm afraid... we don't have that here. \
    Instead, we evaluate customers' health conditions and prepare meals to address them. \
    Our dishes, made from top-notch Italian ingredients can cure various ailments. \
    And before you ask, YES! This is a JoJo reference!";
    section.appendChild(sectionText);
    menuPage.appendChild(section);

    content.appendChild(menuPage);
}