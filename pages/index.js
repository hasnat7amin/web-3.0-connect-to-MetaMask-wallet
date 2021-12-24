import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallets/connectors";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (err) {
      console.log(err);
    }
  }

  async function disconnect() {
    try {
      await deactivate(injected);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={connect}>Connect to MetaMask</button>
      {active ? (
        <span>
          Connected With <b>{account}</b>
        </span>
      ) : (
        <span>Not Connected</span>
      )}
      <button onClick={disconnect}>DisConnect to MetaMask</button>
    </div>
  );
}
