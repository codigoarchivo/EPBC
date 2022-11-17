export interface Iseed {
    cn: number,
    cre: number,
    ct: string,
    ds: {
        en: string,
        es: string,
    },
    dt: {
        en: string,
        es: string,
    },
    id: string,
    im: string,
    na: {
        en: string,
        es: string,
    },
    pj: 18,
    pr: 588,
    ps: {
        en: string,
        es: string
    },
    uid: string,

    rat?: {
        est: number,
        glo: number,
        nam?: number,
    },

    est?: number,
    nam?: String,
    per?: number,
}