/**
 *
 * @param courses {Array<{name: string, prices: [number|null, number|null]}>} Courses array
 * @param range {[number|null, number|null]} Range of prices
 * @return {Array<{name: string, prices: [number|null, number|null]}>}
 */
export function algorithm(courses, range) {
    const infRange = (r) => [
        r[0] === null ? -Infinity : r[0],
        r[1] === null ? Infinity : r[1],
    ]

    const [from, to] = infRange(range);

    return courses.filter((course) => {
        const [min, max] = infRange(course.prices);
        return Math.max(min, from) <= Math.min(max, to);
    });
}
