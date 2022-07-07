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
