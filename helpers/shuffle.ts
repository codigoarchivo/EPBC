import { Iseed } from "../interfaces";

export const shuffle = (array: Iseed[]) => {
    let r = array
        .map((i: Iseed) => [i, i.rat?.est])
        .filter((i: any) => i[1] >= 75)
        .map((i: any) => Number((Math.random() * i[1])).toFixed(0))
        .sort((a: any, b: any) => b[1] - a[1])
        .slice(0, 3)
        .flat()
        .filter((i: any) => typeof (i) === 'object');
    return r.length === 3 ? r : array.slice(0, 3)
};
