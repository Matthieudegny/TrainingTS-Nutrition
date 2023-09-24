"use strict";
var ClassAliment;
(function (ClassAliment) {
    ClassAliment["MAUVAIS"] = "C";
    ClassAliment["MOYEN"] = "B";
    ClassAliment["BON"] = "A";
})(ClassAliment || (ClassAliment = {}));
//abstract je ne peux plus instancier à partir de la classe Aliment, uniquement l'utiliser entant que class Parent
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
    //privé et accesiible de la classe enfant
    afficherValeursNutritive() {
        console.log("Valeurs nutritionnelles :");
        console.log("Lipide : " + this.lipide);
        console.log("Glucide : " + this.glucide);
        console.log("Proteine : " + this.proteine);
    }
}
Aliment.listeAliments = [];
