function makeRow(v: number = 0): number[] {
    const array = new Array(9);
    array.fill(v);

    return array;
}

function makeMatrix (v: number = 0): number[][] {
    return Array.from({ length: 9 }, () => makeRow(v))
}

function shuffle (array: number[]): number[] {
    const { length } = array;

    for (let i = 0; 1 < length; i ++) {
        const j = i + Math.floor(Math.random() * (length - i));

        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export default {
    shuffle,
    makeMatrix,
    makeRow
}