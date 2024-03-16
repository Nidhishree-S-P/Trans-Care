document.addEventListener("DOMContentLoaded", function () {
    // Sample NGO data
    var ngos = [
        { name: "The Humsafar Trust", location: "Mumbai", focus: "Works on health and advocacy for LGBTQ+ communities, including transgender individuals.", website: "https://humsafar.org/" },
        { name: "Sangama", location: "Bangalore", focus: "Advocacy for the rights of sexual minorities, sex workers, and people living with HIV.", website: "https://www.sangama.org/" },
        { name: "Sahodari Foundation", location: "Tamil Nadu", focus: "Works towards social, economic, and political empowerment of transgender and intersex people.", website: "https://www.sahodari.org/" },
        // Add more NGOs as needed
    ];

    var ngoCardsContainer = document.getElementById("ngo-cards-container");

    // Create and append NGO cards
    ngos.forEach(function (ngo) {
        var card = document.createElement("div");
        card.classList.add("ngo-card");

        var heading = document.createElement("h2");
        heading.textContent = ngo.name;

        var location = document.createElement("p");
        location.textContent = "Location: " + ngo.location;

        var focus = document.createElement("p");
        focus.textContent = "Focus: " + ngo.focus;

        var link = document.createElement("a");
        link.href = ngo.website;
        link.textContent = "Website";

        card.appendChild(heading);
        card.appendChild(location);
        card.appendChild(focus);
        card.appendChild(link);

        ngoCardsContainer.appendChild(card);
    });
});
