import Nav from "../components/nav"
import Head from "next/head"
import Prices from "../components/Prices.js"
import React, { useState, useEffect } from "react"
import axios from "axios"

const IndexPage = ({ coinData }) => {
  // const [coinData, setCoinData] = useState([]);
  if (!coinData) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>NextTicker</title>
      </Head>

      <Nav />
      <div className="py-10">
        <h1 className="text-5xl text-center text-accent-1">
          Current Crypto Data
        </h1>
      </div>
      <div>
        <Prices coinData={coinData} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"

  const getData = await axios.get(url, {
    headers: {
      "X-CMC_PRO_API_KEY": process.env.API_KEY,
    },
  })

  const coinData = getData.data
  return { props: { coinData } }
}

export default IndexPage
