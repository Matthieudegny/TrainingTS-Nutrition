"use strict";
new Fruit("Pomme", 53, 0.2, 14, 0.3, "pomme.png");
new Fruit("Poire", 49, 0.1, 15, 0.4, "poire.png");
new Charcuterie("Salami", 270, 26.5, 1.3, 12, "salami.png");
new Charcuterie("Saucisson", 300, 33.1, 1.9, 27.6, "saucisson.png");
for (let aliment of Aliment.listeAliments) {
    aliment.afficherAliment();
    console.log("------------------");
}
