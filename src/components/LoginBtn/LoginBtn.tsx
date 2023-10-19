import { Button } from "@chakra-ui/react";

interface ActionBtn {
    action : () => void;
}

export const LoginBtn = ({action} : ActionBtn) => {
return(
    <Button onClick={action} colorScheme="purple" size="lg" width="100%">Entrar</Button>
)

};