"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// data
var persons_regents_1 = __importDefault(require("./data/persons.regents"));
var places_gardarike_1 = __importDefault(require("./data/places.gardarike"));
var places_newSweden_1 = __importDefault(require("./data/places.newSweden"));
var places_goldCoast_1 = __importDefault(require("./data/places.goldCoast"));
var places_balticCities_1 = __importDefault(require("./data/places.balticCities"));
// utils
var toFeatureCollection_1 = __importDefault(require("./utils/toFeatureCollection"));
var sweHistory = {
    places: {
        gardaRike: toFeatureCollection_1.default(places_gardarike_1.default),
        goldCoast: toFeatureCollection_1.default(places_goldCoast_1.default),
        newSweden: toFeatureCollection_1.default(places_newSweden_1.default),
        balticCities: toFeatureCollection_1.default(places_balticCities_1.default),
    },
    persons: {
        regents: persons_regents_1.default,
    }
};
exports.default = sweHistory;
