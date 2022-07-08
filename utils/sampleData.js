import lorem from "./lorem";
import s from "./getRelativeSize";

export const horseTypes = [
    { id: "0", name: "Нийт", count: 51 },
    { id: "1", name: "Азарга", count: 13 },
    { id: "2", name: "Морь", count: 10 },
    { id: "3", name: "Гүү", count: 3 },
    { id: "4", name: "Соёолон үрээ", count: 6 },
    { id: "5", name: "Соёолон байдас", count: 2 },
    { id: "6", name: "Хязаалан үрээ", count: 7 },
    { id: "7", name: "Хязаалан байдас", count: 1 },
    { id: "8", name: "Шүдлэн үрээ", count: 9 },
    { id: "9", name: "Шүдлэн байдас", count: 0 },
    { id: "10", name: "Эр даага", count: 1 },
    { id: "11", name: "Охин даага", count: 1 },
    { id: "12", name: "Эр унага", count: 1 },
    { id: "13", name: "Охин унага", count: 1 },
];

export const ads = [
    {
        id: 2,
        title: lorem.generateWords(10),
        description: lorem.generateWords(10),
        price: 23000000,
        created: Date.now() - 20000000,
        image: { source: require("../assets/sample/2.jpg"), width: s(345), height: s(200) },
    },
    {
        id: 3,
        title: lorem.generateWords(10),
        description: lorem.generateWords(10),
        price: 15000000,
        created: Date.now() - 400000000,
        image: { source: require("../assets/sample/3.jpg"), width: s(345), height: s(200) },
    },
    {
        id: 4,
        title: lorem.generateWords(10),
        description: lorem.generateWords(10),
        price: 5000000,
        created: Date.now() - 3000000000,
        image: { source: require("../assets/sample/4.jpg"), width: s(345), height: s(200) },
    },
    {
        id: 1,
        title: lorem.generateWords(10),
        description: lorem.generateWords(10),
        price: 10000000,
        created: Date.now() - 1000000,
        image: { source: require("../assets/sample/1.jpg"), width: s(345), height: s(200) },
    },
];

export const horses = [
    {
        id: 1,
        title: lorem.generateWords(5),
        subtitle: lorem.generateWords(5),
        image: { source: require("../assets/sample/4.jpg") },
    },
    {
        id: 2,
        title: lorem.generateWords(5),
        subtitle: lorem.generateWords(5),
        image: { source: require("../assets/sample/3.jpg") },
    },
    {
        id: 3,
        title: lorem.generateWords(5),
        subtitle: lorem.generateWords(5),
        image: { source: require("../assets/sample/2.jpg") },
    },
    {
        id: 4,
        title: lorem.generateWords(5),
        subtitle: lorem.generateWords(5),
        image: { source: require("../assets/sample/1.jpg") },
    },
    {
        id: 5,
        title: lorem.generateWords(5),
        subtitle: lorem.generateWords(5),
        image: { source: require("../assets/sample/4.jpg") },
    },
    {
        id: 6,
        title: lorem.generateWords(5),
        subtitle: lorem.generateWords(5),
        image: { source: require("../assets/sample/3.jpg") },
    },
];

export const races = [
    { id: 1, name: "1. Улсын наадам" },
    { id: 2, name: "2. Их хурд" },
    { id: 3, name: "3. Зүүн бүс" },
    { id: 4, name: "4. Өвгөн ноён" },
    { id: 5, name: "5. Төвийн бүс" },
    { id: 6, name: "6. Хангайн бүс" },
    { id: 7, name: "7. Дүнжингарав" },
    { id: 8, name: "8. Говийн бүс" },
    { id: 9, name: "9. Аймгууд" },
];

export const raceYears = [
    { id: 1, name: "2020 Ардын хувьсгалын 99 жил" },
    { id: 2, name: "2019 Ардын хувьсгалын 98 жил" },
    { id: 3, name: "2018 Ардын хувьсгалын 97 жил" },
    { id: 4, name: "2017 Ардын хувьсгалын 96 жил" },
    { id: 5, name: "2016 Ардын хувьсгалын 95 жил" },
    { id: 6, name: "2015 Ардын хувьсгалын 94 жил" },
    { id: 7, name: "2014 Ардын хувьсгалын 93 жил" },
    { id: 8, name: "2013 Ардын хувьсгалын 92 жил" },
    { id: 9, name: "2012 Ардын хувьсгалын 91 жил" },
];

export const raceTypes = [
    { id: 1, name: "Азарга" },
    { id: 2, name: "Их нас" },
    { id: 3, name: "Соёолон" },
    { id: 4, name: "Хязаалан" },
    { id: 5, name: "Шүдлэн" },
    { id: 6, name: "Даага" },
    { id: 7, name: "Сонгомол" },
];

export const raceWinners = [
    {
        id: 1,
        position: 1,
        title: lorem.generateWords(3),
        image: { source: require("../assets/sample/4.jpg") },
    },
    {
        id: 2,
        position: 2,
        title: lorem.generateWords(3),
        image: { source: require("../assets/sample/3.jpg") },
    },
    {
        id: 3,
        position: 3,
        title: lorem.generateWords(3),
        image: { source: require("../assets/sample/2.jpg") },
    },
    {
        id: 4,
        position: 4,
        title: lorem.generateWords(3),
        image: { source: require("../assets/sample/1.jpg") },
    },
    {
        id: 5,
        position: 5,
        title: lorem.generateWords(3),
        image: { source: require("../assets/sample/4.jpg") },
    },
    {
        id: 6,
        position: 6,
        title: lorem.generateWords(3),
        image: { source: require("../assets/sample/3.jpg") },
    },
    {
        id: 7,
        position: 7,
        title: lorem.generateWords(3),
        image: { source: require("../assets/sample/4.jpg") },
    },
    {
        id: 8,
        position: 8,
        title: lorem.generateWords(3),
        image: { source: require("../assets/sample/3.jpg") },
    },
];

export const articles = [
    {
        id: 1,
        title: lorem.generateWords(5),
        created: Date.now() - 20000000,
        image: { source: require("../assets/sample/4.jpg") },
    },
    {
        id: 2,
        title: lorem.generateWords(5),
        created: Date.now() - 400000000,
        image: { source: require("../assets/sample/3.jpg") },
    },
    {
        id: 3,
        title: lorem.generateWords(5),
        created: Date.now() - 3000000000,
        image: { source: require("../assets/sample/2.jpg") },
    },
    {
        id: 4,
        title: lorem.generateWords(5),
        created: Date.now() - 3500000000,
        image: { source: require("../assets/sample/1.jpg") },
    },
    {
        id: 5,
        title: lorem.generateWords(5),
        created: Date.now() - 4000000000,
        image: { source: require("../assets/sample/4.jpg") },
    },
    {
        id: 6,
        title: lorem.generateWords(5),
        created: Date.now() - 4500000000,
        image: { source: require("../assets/sample/3.jpg") },
    },
];
