import { VStack, Box, Image } from "@chakra-ui/react";
// import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";

interface Props {
    images: string[];
}

const Carousel = ({ images }: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const nextSlide = (currentSlide + 1) % images.length;
        const timer = setTimeout(() => {
            setCurrentSlide(nextSlide);
        }, 3000); // Change slide every 3 seconds

        return () => clearTimeout(timer);
    }, [currentSlide, images.length]);

    return (
        <VStack>
            <Box
                width="100%"
                height="35rem"
                overflow="hidden"
                position="relative"
            >
                {images.map((imageUrl, index) => (
                    <Box
                        key={index}
                        width="100%"
                        height="100%"
                        position="absolute"
                        top="0"
                        left="0"
                        opacity={currentSlide === index ? 1 : 0}
                        transition="opacity 1s ease-in-out"
                    >
                        <Image
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            width="100%"
                            height="100%"
                            objectFit="cover"
                        />
                    </Box>
                ))}
            </Box>
        </VStack>
    );
};

export default Carousel;
