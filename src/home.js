export default function loadHome() {
    const content = document.querySelector("#content");
    content.textContent = "";
    
    const homePage = document.createElement("div");
    homePage.id = "page_content";
    const homePageHeader = document.createElement("h1");
    homePageHeader.textContent = "Trattoria Trussardi";
    homePage.appendChild(homePageHeader);

    const aboutSection = document.createElement("div");
    aboutSection.classList.add("section");
    const aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "About";
    const aboutText = document.createElement("p");
    aboutText.textContent = "Trattoria Trussardi is a Italian restaurant owned \
    and managed by Tonio Trussardi. The dishes served here will make you feel like a new person. \
    Don't believe? Come give it a try!";
    aboutSection.appendChild(aboutHeader);
    aboutSection.appendChild(aboutText);
    homePage.appendChild(aboutSection);

    const hoursSection = document.createElement("div");
    hoursSection.classList.add("section");
    const hoursHeader = document.createElement("h2");
    hoursHeader.textContent = "Hours";
    const hoursText = document.createElement("p");
    hoursText.textContent = "Honestly just pop in whenever you feel like during the day. \
    Tonio is always here ready to serve you dishes that will change the way you view life.";
    hoursSection.appendChild(hoursHeader);
    hoursSection.appendChild(hoursText);
    homePage.appendChild(hoursSection);

    const locationSection = document.createElement("div");
    locationSection.classList.add("section");
    const locationHeader = document.createElement("h2");
    locationHeader.textContent = "Location";
    const locationText = document.createElement("p");
    locationText.innerHTML = "We are located in <b><i>Morioh, Japan</i></b>.<br>Ask Okuyasu for help if you can't find us.";
    locationSection.appendChild(locationHeader);
    locationSection.appendChild(locationText);
    homePage.appendChild(locationSection);

    content.appendChild(homePage);
}