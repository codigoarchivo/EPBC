import { useMediaQuery, useTheme } from '@mui/material';

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export const mediaRes = (queryMedia: Breakpoint[], queryNumber: object[]) => {
    const { breakpoints } = useTheme();
    let resp: any = [];

    queryMedia.map((item: Breakpoint) => {
        resp.length === 2 ? resp.shift() : resp;

        const dataResp = useMediaQuery(item.startsWith('md') ? breakpoints.up(item) : breakpoints.up(item));

        if (dataResp) {
            resp.push({
                valB: dataResp,
                valS: item,
                valP: Object.values(queryNumber.filter((n: any) => n[item])[0])[0]
            })
        }
    });

    return resp;
}
