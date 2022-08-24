import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Otterverse Mint Page</h1>

      <div
        className={styles.nftBoxGrid}
        role="button"
        onClick={() => router.push(`/mint`)}
      >
        {/*
        <div className={styles.optionSelectBox}>
          <h2 className={styles.selectBoxTitle}>Mint an Otter</h2>
          <p className={styles.selectBoxDescription}>
            Click here to mint an Otterverse NFT.
          </p>
        </div>
        */}

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/*<img src={`/icons/token.webp`} alt="drop" />*/}
          <h2 className={styles.selectBoxTitle}>Stake your Otters</h2>
          <p className={styles.selectBoxDescription}>
            {" "}
            Stake your Otters to unlock Otterverse membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
