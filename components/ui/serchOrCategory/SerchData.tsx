import { useRouter } from "next/router";
import {
    chakra,
    InputRightElement,
    Input,
    InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useForm } from 'react-hook-form';

type FormData = {
    q: string,
};
export const SerchData = () => {
    const { push } = useRouter();
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>();

    const SerchProduct = ({ q }: FormData) => {
        console.log(errors.q);
        push({
            pathname: "/",
            query: q,
        });
        reset();
    };


    return (
        <chakra.form onSubmit={handleSubmit(SerchProduct)} pl={{ base: 0, lg: 20 }}>
            <InputGroup>
                <InputRightElement pointerEvents="none">
                    <SearchIcon display={"block"} />
                </InputRightElement>
                <Input
                    {...register('q', {
                        required: 'Este campo es requerido',
                        minLength: { value: 2, message: 'Minimo 2 caracteres' }
                    })}
                    _placeholder={{ color: "inherit" }}
                    rounded={"full"}
                    border={"none"}
                    boxShadow="lg"
                    type={"search"}
                />
            </InputGroup>
        </chakra.form>
    )
}
