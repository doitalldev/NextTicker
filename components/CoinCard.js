import React from "react"

const CoinCard = ({ coin }) => {
  const { name, symbol, quote, total_supply, last_updated, tags } = coin
  const price = Math.round(quote.USD.price * 100) / 100

  const percentChange1h = Math.round(quote.USD.percent_change_1h * 100) / 100

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg ">
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <div className="text-lg">{symbol}</div>
        <div>
          Current Price:{" "}
          <span className="font-bold">
            ${price} / {symbol}
          </span>
        </div>
        <div>Percent Change Last Hour: {quote.USD.percent_change_1h}%</div>
        <div>Total Supply: {total_supply}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags
          ? tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  )
}

export default CoinCard
