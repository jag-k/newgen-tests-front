import {algorithm} from "./docs/public/scripts/algorithm.js";

// Список курсов
let courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRanges = [
    [null, 200],
    [100, 350],
    [200, null]
];

for (const range of requiredRanges) {
    console.log('For range', range, 'we have:');
    console.log(algorithm(courses, range));
}
