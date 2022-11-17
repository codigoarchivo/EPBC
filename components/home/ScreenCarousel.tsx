import { Button, chakra, useBreakpointValue } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "nuka-carousel";
import { CardBase } from "../card";
import { seedData } from "../../database";

export const ScreenCarousel = () => {
  // use Carousel
  return (
    <Carousel
      wrapAround={true}
      slidesToScroll={3}
      slidesToShow={useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 3, xl: 4 })}
      cellSpacing={0}
      cellAlign={"center"}
      defaultControlsConfig={{
        nextButtonText: (
          <Button
            as={"div"}
            variant={"primary"}
            rounded={"full"}
            w={11}
            fontSize={"2xl"}
          >
            <ChevronRightIcon />
          </Button>
        ),
        prevButtonText: (
          <Button
            as={"div"}
            variant={"primary"}
            rounded={"full"}
            w={11}
            fontSize={"2xl"}
          >
            <ChevronLeftIcon />
          </Button>
        ),
        pagingDotsStyle: {
          fill: "transparent",
        },
        nextButtonStyle: {
          backgroundColor: "transparent",
        },
        prevButtonStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      {/* CardBase */}
      <CardBase Divi={chakra.ul} product={seedData} />

    </Carousel>
  );
};
