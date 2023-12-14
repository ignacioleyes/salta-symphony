import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { I18nextProvider } from "react-i18next";
import { AuthProvider } from 'react-auth-kit'
import i18next from "i18next";

import global_es from "../src/translations/es/global.json";
import global_en from "../src/translations/en/global.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "es",
    resources: {
        es: {
            global: global_es,
        },
        en: {
            global: global_en,
        },
    },
});


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider
            authType={navigator.cookieEnabled ? "cookie" : "localstorage"}
            authName={"_ssymphony_auth"}
            cookieDomain={window.location.hostname}
            cookieSecure={window.location.protocol === "https:"}
        >
            <I18nextProvider i18n={i18next}>
                <ChakraProvider theme={theme}>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                </ChakraProvider>
            </I18nextProvider>
        </AuthProvider>
    </React.StrictMode>
);