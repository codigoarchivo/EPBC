import { useRef } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useForm } from "react-hook-form";
import { ModeColor } from "../../helpers";


type FormData = {
  role: string,
  coment: string,
};

export const AddTestimonials = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const { bgColor, modColor } = ModeColor();

  const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>();


  const saveTestimonials = () => {

    reset()
  };

  return (
    <>
      <Button
        mt={10}
        onClick={onOpen}
      >
        {t('about:aK')}
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {t('about:aM')}
          </ModalHeader>
          <ModalCloseButton />
          <chakra.form onSubmit={handleSubmit(saveTestimonials)}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>
                  {t('about:aL')}
                </FormLabel>
                <Input
                  {...register('role', {
                    required: 'Este campo es requerido',
                    minLength: { value: 2, message: 'Minimo 2 caracteres' }
                  })}
                  name="role"
                  ref={initialRef}
                  placeholder={t('about:aL')}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>
                  {t('about:aLL')}
                </FormLabel>
                <Textarea
                  {...register('coment', {
                    required: 'Este campo es requerido',
                    minLength: { value: 2, message: 'Minimo 2 caracteres' }
                  })}
                  name="coment"
                  _hover={{ backgroundColor: bgColor.bg5, borderColor: bgColor.bg6 }}
                  p={{ base: 1, md: 3 }}
                  bg={bgColor.bg1}
                  variant={"filled"}
                  _focus={{ border: modColor.modelA }}
                  borderColor={bgColor.bg6}
                  rounded="none"
                  placeholder={t('about:aLL')}
                  size="sm"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                {t('save')}
              </Button>
              <Button onClick={onClose}>
                {t('close')}
              </Button>
            </ModalFooter>
          </chakra.form>
        </ModalContent>
      </Modal>
    </>
  );
};
