import {algorithm} from "./algorithm.js";

const courseList = document.querySelector('[data-course-list]');
const priceFrom = document.querySelector('input[data-course-price="from"]')
const priceTo = document.querySelector('input[data-course-price="to"]')
const output = document.querySelector('output')


function createCourseItem(course) {
    const createElem = (tag, content) => {
        const item = document.createElement(tag);
        if (content) item.textContent = content;
        return item;
    }

    const {name, prices} = course;
    const [from, to] = prices;
    const item = createElem('tr');

    let price = []
    if (from !== null) {
        price.push(`from ${from}`)
    }
    if (to !== null) {
        price.push(`to ${to}`)
    }
    if (!price.length) {
        price = ['any']
    }

    item.appendChild(createElem('td', name));
    item.appendChild(createElem('td', price.join(' ')));

    return item;
}

class Course {
    /**
     * Course
     * @param name {string}
     * @param prices {[number|null, number|null]}
     */
    constructor({name, prices}) {
        this.name = name;
        this.prices = prices;
        this.elem = createCourseItem(this)
        courseList.appendChild(this.elem)
    }

    setVisible(visible) {
        this.elem.style.display = visible ? '' : 'none'
    }
}


const courses = [
    {name: "Courses in England", prices: [0, 100]},
    {name: "Courses in Germany", prices: [500, null]},
    {name: "Courses in Italy", prices: [100, 200]},
    {name: "Courses in Russia", prices: [null, 400]},
    {name: "Courses in China", prices: [50, 250]},
    {name: "Courses in USA", prices: [200, null]},
    {name: "Courses in Kazakhstan", prices: [56, 324]},
    {name: "Courses in France", prices: [null, null]},
].map((course) => (new Course(course)));


function updateCourses() {
    const from = parseInt(priceFrom.value) || null;
    const to = parseInt(priceTo.value) || null;
    console.log(from, to)
    const res = algorithm(courses, [from, to]);
    console.log(res)
    for (const c of courses) {
        c.setVisible(res.includes(c))
    }
    output.innerText = `Find ${res.length} course(s) of ${courses.length}.`
}

updateCourses()

priceFrom.addEventListener('input', updateCourses)
priceTo.addEventListener('input', updateCourses)
