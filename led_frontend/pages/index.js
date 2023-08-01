import Header from "../components/Header";
import TokenInfo from "../components/TokenInfo";
import Transfer from "../components/Transfer";
import BalanceCheck from "../components/BalanceCheck";
import LEDOperation from "../components/LEDOperation";
import Mint from "../components/Mint";

const App = () => {
  return (
    <>
      <Header />

      <TokenInfo />
      <LEDOperation />
      <Mint />
      <BalanceCheck />
      <Transfer />
    </>
  );
};

export default App;
