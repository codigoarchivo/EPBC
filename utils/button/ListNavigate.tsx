import React from 'react'
import { ListRoute } from '../../components/routes'
import { SomeButton } from './'

export const ListNavigate = ({ Divi }: any) => {
    const { dataRoute } = ListRoute();
    return (
        <>
            {dataRoute.map(({ icon, ref, as, nam, rol }, key) => (
                <Divi as={"div"} key={key} display={rol && rol}>
                    <SomeButton
                        leftIcon={icon}
                        fontWeight={"normal"}
                        variant={"tertiary"}
                        as={as}
                        href={ref}
                        name={nam}
                    />
                </Divi>
            ))}
        </>
    )
}
