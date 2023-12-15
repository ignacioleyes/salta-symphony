import { VStack, Box, Text, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const About = () => {
    const [t] = useTranslation("global");
    return (
        <VStack height={"98vh"} spacing={0} mt={5} mb={"5"}>
            <HStack
                width={"65%"}
                height={"100%"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"1rem"}
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
                overflowX={"auto"}
            >
                <Box width={"90%"} maxHeight={"95%"}>
                    <Text
                        color={"secondary"}
                        textAlign={"justify"}
                        fontSize={{
                            base: "0.75rem",
                            sm: "0.9rem",
                            md: "0.9rem",
                            lg: "1rem",
                            xl: "1.2rem",
                        }}
                    >
                        {t("about.history")}
                    </Text>
                </Box>
            </HStack>
        </VStack>
    );
};

export default About;
