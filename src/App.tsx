import { VStack, Box } from "@chakra-ui/react";
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import Members from "./pages/members/Members";
import Schedule from "./pages/schedule/Schedule";
import SymphonyHistory from "./pages/symphonyHistory/SymphonyHistory";
import Footer from "./components/footer/Footer";
import HomeInfo from "./pages/home/HomeInfo";
import Contact from "./pages/contact/ContactView";

const App = () => {
    return (
        <VStack w={"full"} minH={"100vh"} spacing={0}>
            <NavBar />
            <Box w={"full"} flex={1} bgColor={"whitesmoke"}>
                <Routes>
                    <Route path={"/"} element={<HomeInfo />} />
                    <Route path={"/history"} element={<SymphonyHistory />} />
                    <Route path={"/staff"} element={<Members />} />
                    <Route path={"/schedule"} element={<Schedule />} />
                    <Route path={"/contact"} element={<Contact />} />
                </Routes>
            </Box>
            <Footer />
        </VStack>
    );
};

export default App;