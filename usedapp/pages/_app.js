import "@/styles/globals.css";
import { contractAddress } from "./constants";
import { DAppProvider } from "@usedapp/core";

const config = { multicallAddresses: [contractAddress] };

export default function App({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}
