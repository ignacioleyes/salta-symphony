import { Box } from "@chakra-ui/react";
import Carousel from "./Carousel";
import HomeLinks from "./HomeLinks";

const images: string[] = [
  "/orch1.JPG",
  "/orch2.JPG",
  "/orch3.JPG",
  "/orch4.JPG",
  "/orch5.JPG",
  "/orch6.JPG",
]
 
const HomeInfo = () => {
    return (
        <Box>
            <Carousel images={images} />
            <HomeLinks />
        </Box>
    );
};

export default HomeInfo;
