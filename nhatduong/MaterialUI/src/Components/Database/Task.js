
let id = 0;
export function createData(name, level) {
    id += 1;
    return { id, name, level };
}
// 0 : Small 1:Medium 2:High
export default{
rows : [
    createData('A Task 1', 1),
    createData('C Task 2', 2),
    createData('B Task 3', 0),
    createData('S Task 4', 2),
    createData('A Task 5', 2),
]
}