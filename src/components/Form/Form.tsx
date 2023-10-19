import { Flex, FormControl, FormHelperText, FormLabel, Input, Spacer } from "@chakra-ui/react";
import { LoginBtn } from "../LoginBtn/LoginBtn";
import { login } from "../../services/login";

export const Form = () => {
return(
<Flex justifyContent="center" >
    <form>
    <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type='email' />
    </FormControl>
    <Spacer />

     <FormControl>
        <FormLabel>Senha</FormLabel>
        <Input type='password' />
    </FormControl>

    <LoginBtn action={login}/>
    </form>
</Flex>

)



};