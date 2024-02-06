import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AppflowContextProvider from "@/context/appflow";
import DashboardReducer from "@/context/dashboardReducer";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",

  typography: {
    allVariants: {
      fontFamily: "Vazir-Regular",
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DashboardReducer>
    <AppflowContextProvider>
       <Component {...pageProps} />
    </AppflowContextProvider>
    </DashboardReducer>


  );
}
