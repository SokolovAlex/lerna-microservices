import React from 'react';
import { AppContainer } from './styled';
import { BrokerMarkets } from './BrokerMarkets/BrokerMarkets';
import { ErrorBoundary } from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <AppContainer>
          <BrokerMarkets></BrokerMarkets>
      </AppContainer>
    </ErrorBoundary>
  );
}

export default App;
