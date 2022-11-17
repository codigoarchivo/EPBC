import { RefObject, useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  CloseButton,
  Icon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SerchData } from "./";
import { useModality } from "../../../hooks";
import { ModeColor } from "../../../helpers";


export const SerchDataMovil = () => {
  const { modality, setModality } = useModality();
  const onSerch = () => setModality(!modality);
  const cancelRef = useRef(false);
  const { modColor } = ModeColor();

  return (
    <>
      <Icon
        onClick={() => setModality(!modality)}
        boxSize={4}
        display={{ base: "block", lg: "none" }}
        cursor={"pointer"}
      >
        <SearchIcon mx={0} />
      </Icon>

      <AlertDialog
        isOpen={modality}
        leastDestructiveRef={cancelRef as RefObject<any>}
        onClose={onSerch}
      >
        <AlertDialogOverlay>
          <AlertDialogContent backgroundColor={modColor.modelB} p={2}>
            <AlertDialogHeader>
              <CloseButton size="md" onClick={onSerch} />
            </AlertDialogHeader>

            <AlertDialogBody>
              {/* SerchData */}
              <SerchData />
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

