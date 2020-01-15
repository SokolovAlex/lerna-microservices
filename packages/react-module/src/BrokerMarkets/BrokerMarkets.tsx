import React from 'react';
import { MarketsInfo, MarketsInfoBlock, TotalBalance, CurrencyToggle, Currencies, Currency} from './BrokerMarkets.styled';

enum ECurrency {
  RUB,
  USD,
  EUR,
}
const currencies = [
  { symbol: "RUB", id: ECurrency.RUB, balance: 111 },
  { symbol: "USD", id: ECurrency.USD, balance: 222 },
  { symbol: "EUR", id: ECurrency.EUR, balance: 333 },
];

function BrokerMarkets() {
  const [activeCurrency, setActiveCurrency] = React.useState(currencies[0]); 
  const changeCurrency = React.useCallback((currency) => {
    setActiveCurrency(currency);
  }, []);
  return (
    <MarketsInfoBlock>
        <MarketsInfo>
            <TotalBalance>{ activeCurrency.balance }&nbsp;{ activeCurrency.symbol }</TotalBalance>
            <CurrencyToggle>
                <Currencies>
                  {
                    currencies.map((currency) => (
                      <Currency active={currency === activeCurrency} key={currency.id} onClick={() => changeCurrency(currency)}>
                        { currency.symbol }

                        { currency === activeCurrency }
                      </Currency>
                    ))
                  }
                </Currencies>
            </CurrencyToggle>
        </MarketsInfo>
    </MarketsInfoBlock>
  );
}

export { BrokerMarkets };
