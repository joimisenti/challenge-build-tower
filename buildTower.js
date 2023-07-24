/*
Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

The number passed in tells you how many floors the tower should have.

The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

Each block is represented by a *.

For example, a tower of 3 floors looks like this (note the spacing):

[
    '  *  ',
    ' *** ',
    '*****'
]
and a tower of 6 floors looks like this:

[
    '     *     ',
    '    ***    ',
    '   *****   ',
    '  *******  ',
    ' ********* ',
    '***********'
]
*/

const buildTower = x => {
    const tower = [];
    let stars = '*';
    let spaceAround = Math.ceil((x * 2 - 1) / 2)
    
    while (spaceAround > 0) {
        let layer = " ".repeat(spaceAround) + stars + " ".repeat(spaceAround);
        tower.push(layer);

        stars += '**';
        spaceAround--;
    }

    return tower;
}

console.log(buildTower(8))

const towerBuilder = (num) => {
    tower =[];
    let spaceInc = 0;
    for (let i = 0; i < num; i++) {
        const star = '*';
        const space = ' ';
        const spaceRepeat = space.repeat(spaceInc);
        tower.unshift(`${spaceRepeat}${star.repeat(((num - i) * 2) - 1)}${spaceRepeat}`)
        spaceInc++
    }

    return tower
}

console.log(towerBuilder(10))