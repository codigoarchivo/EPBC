import { Container } from "@chakra-ui/react";
import {
  ScreenHero,
  MarqueAndCarousel,
  CreateNewAcount
} from "./";


export const Home = () => {
  return (
    <Container maxW={"container.xs"} px={{ base: 1, sm: 4 }}>
      {/* hero */}
      <ScreenHero />

      {/* create account */}
      <CreateNewAcount />
      {/* MarqueAndCarousel */}
      <MarqueAndCarousel />

    </Container>
  );
};
