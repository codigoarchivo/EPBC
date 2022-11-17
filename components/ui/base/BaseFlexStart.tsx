import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { IconButton } from "@chakra-ui/react"

export const BaseFlexStart = ({ isOpen, onToggle }: any) => {
    return (
        <div className="navbar__flexStart">
            <IconButton
                onClick={onToggle}
                icon={
                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={"tertiary"}
                aria-label={"Toggle Navigation"}
            />
        </div>
    )
}
