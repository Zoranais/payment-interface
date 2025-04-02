import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Global from "./global.tsx";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StyleSheetManager shouldForwardProp={isPropValid}>
            <Global />
            <App />
            <ToastContainer pauseOnHover theme="light" />
        </StyleSheetManager>
    </StrictMode>
);
