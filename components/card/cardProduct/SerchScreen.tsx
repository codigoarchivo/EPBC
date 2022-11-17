import { useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Box,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
  useDisclosure,
  Collapse,
  Flex,
  Badge,
  WrapItem,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { Rating } from "react-simple-star-rating";
import { LoveIcon, ShopAll } from "../../../utils";
import { ModeColor, Toast } from "../../../helpers";
import { Iseed } from "../../../interfaces";


export const SerchScreen = (data: Iseed) => {
  const { t } = useTranslation('common');
  const match = useRef();
  const matchValid = useRef();
  const { bordes, modColor } = ModeColor();
  const { push, locale } = useRouter();
  const { isOpen, onToggle } = useDisclosure();

  // const activeCartSelect = [{ id: 'MScyWrDlzQT1v88VcOna4QjijB03' }];
  // const saveCartSelect = [{ id: 'MScyWrDlzQT1v88VcOna4QjijB03' }];

  // data product

  // cart activo
  // match.current = useMemo(
  //   () => activeCartSelect.map((item) => item.id).includes(data.id),
  //   [activeCartSelect, data.id]
  // );

  // guardado para mas tarde
  // matchValid.current = useMemo(
  //   () => saveCartSelect.map((item) => item.id).includes(data.id),
  //   [saveCartSelect, data.id]
  // );

  // cart activo
  const handleSelect = () => {
    const { rat, ...newData } = data;

    if (data.cn <= 1) {
      return Toast(t('amount'), "info", 5000);
    }

    // activeCartSelect
    if (match.current) {
      return Toast(
        t('search.sD'),
        "error",
        5000
      );
    }

    // saveCartSelect
    if (matchValid.current) {
      push("/cart");
      return Toast(
        t('search.sE'),
        "info",
        5000
      );
    }

    // dispatch
    push({
      pathname: "/search/[id]",
      query: {
        id: data.id,
      },
    });

    // dispatch(cartSaveLatest(newData, t('error')));
  };

  // guardado para mas tarde
  const handleSave = async () => {
    // const product = await dbProductsById(data.id);

    // if (product.na === undefined || product.na === "") {
    //   return Toast(
    //     t('search.sG'),
    //     "error",
    //     5000
    //   );
    // }

    // if (product.cn <= 1) {
    //   return Toast(t('amount'), "info", 5000);
    // }

    // activeCartSelect
    if (match.current) {
      return Toast(
        t('search.sF'),
        "error",
        5000
      );
    } else {
      Toast(
        matchValid.current
          ? t('search.sG') : t('search.sH'),
        matchValid.current ? "error" : "success",
        5000
      );


      // dispatch(saveProductCart(product, t('error')));

      // dispatch(cartSaveLatest(product, t('error')));
    }
  };


  return (
    <>
      <WrapItem justifyContent={"center"}>
        <Box position={"relative"}>
          <Box
            as={LoveIcon}
            color={matchValid.current ? "red" : "GrayText"}
            position={"absolute"}
            zIndex={2}
            left={"20px"}
            top={0}
            p={4}
            w={12}
            h={12}
            cursor={"pointer"}
            onClick={handleSave}
          />
        </Box>
        <Box
          height={"410px"}
          w="250px"
          position={"relative"}
          onClick={handleSelect}
          mx={5}
        >
          <VStack
            spacing={0}
            onMouseEnter={() => onToggle()}
            onMouseLeave={() => onToggle()}
            cursor={"pointer"}
            w="250px"
            position={"absolute"}
            border={bordes}
            boxShadow={"dark-lg"}
            backgroundColor={modColor.modelE}
            rounded="md"
            _hover={{
              maxHeight: "410px",
              minHeight: "330px",
              boxShadow: "lg",
            }}
          >
            <Box position={"relative"}>
              <Image
                src={data.im || "https://via.placeholder.com/248.png?text=Imagen"}
                alt={locale === "en" ? data.na.en : data.na.es}
                width={248}
                height={248}
                objectFit="cover"
                objectPosition="center"
                style={{
                  borderTopLeftRadius: "5px",
                  borderTopRightRadius: "5px",
                }}
              />
            </Box>

            <Box p={3} w={"full"}>
              <Flex align="baseline" w={"full"}>
                <Badge colorScheme="green">
                  {locale === "en" ? data.ps.en : data.ps.es}
                </Badge>
              </Flex>

              <HStack w={"full"} spacing={0}>
                <Rating
                  size={17}
                  ratingValue={data.rat !== undefined ? data.rat?.est : 0}
                  readonly={true}
                />
                <Text h={"full"} fontSize={"lg"} fontWeight={"bold"}>
                  {data.est !== undefined ? data.rat?.nam : "0.0"}
                </Text>{" "}
              </HStack>

              <Stat size={"sm"} width={"full"}>
                <StatLabel textTransform={"capitalize"}>
                  {locale === "en-US" ? data.na.en : data.na.es}
                </StatLabel>
                <StatNumber>
                  <HStack w={"full"} justifyContent={"space-between"}>
                    <Text>${data.pr}</Text>
                    <Icon as={ShopAll} w={6} h={6} />
                  </HStack>
                </StatNumber>
                <Collapse in={isOpen} animateOpacity>
                  <StatHelpText mt={2}>
                    {locale === "en-US" ? data.ds.en : data.ds.es}
                  </StatHelpText>
                </Collapse>
              </Stat>
            </Box>
          </VStack>
        </Box>
      </WrapItem>
    </>
  );
};

