import "../styles/global.css";
import { MoralisProvider } from "react-moralis";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div
        className="my-0 
      h-full bg-gradient-to-br from-blue-500 to-blue-200 bg-fixed pb-5"
      >
        <MoralisProvider initializeOnMount={false}>
          <Toaster />
          <Component {...pageProps} />
        </MoralisProvider>
      </div>
    </>
  );
}

export default MyApp;
