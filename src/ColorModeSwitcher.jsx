// import { FaSun} from 'react-icons'
import { FaMoon,FaSun } from "react-icons/fa6";
import { useColorMode,useColorModeValue,IconButton } from '@chakra-ui/react'

const ColorModeSwitcher = props =>{
    const {toggleColorMode} = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon,FaSun);

    return(
        <>
        <IconButton
variant="ghost"
        color="current"
        pos={'fixed'}
        top={'4'} //1 = 4px
        right={'4'}
        onClick={toggleColorMode}
        icon={<SwitchIcon/>}
        zIndex={"overlay"}
        {...props}
        />
        </>
    );
}

export default ColorModeSwitcher