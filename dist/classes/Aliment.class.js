"use strict";
var ClassAliment;
(function (ClassAliment) {
    ClassAliment["MAUVAIS"] = "C";
    ClassAliment["MOYEN"] = "B";
    ClassAliment["BON"] = "A";
})(ClassAliment || (ClassAliment = {}));
class Aliment {
    constructor(_nom, _sante, calorie, lipide, glucide, proteine, _image) {
        this._nom = _nom;
        this._sante = _sante;
        this.calorie = calorie;
        this.lipide = lipide;
        this.glucide = glucide;
        this.proteine = proteine;
        this._image = _image;
        Aliment.listeAliments.push(this);
    }
    get nom() {
        return this._nom;
    }
    get sante() {
        return this._sante;
    }
    get image() {
        return this._image;
    }
    set nom(newNom) {
        this._nom = newNom;
    }
    set sante(newSante) {
        this._sante = newSante;
    }
    set image(newImage) {
        this._image = newImage;
    }
}
Aliment.listeAliments = [];
let a1 = new Aliment("Pomme", ClassAliment.BON, 53, 0.2, 14, 0.3, "pomme.png");
let a2 = new Aliment("Salami", ClassAliment.MAUVAIS, 270, 26.5, 1.3, 12, "Salami.png");
console.log(Aliment.listeAliments);
