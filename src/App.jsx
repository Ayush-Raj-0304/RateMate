import { useState } from 'react';
import InputBox from './assets/components/InputBox';
import useCurrencyInfo from './assets/customHooks/useCurrencyInfo';
import './App.css';

function App() {
  const [amount, setAmount] = useState(0); 
  const [result, setResult] = useState(0);
  
  const [from, setFrom] = useState('usd'); 
  const [to, setTo] = useState('inr'); 

  const convertInto = useCurrencyInfo(from);
  const allCurrencies = Object.keys(convertInto);

  const swap = () => { 
    setFrom(to);
    setTo(from);
    setAmount(result);
    setResult(amount);
  };

  const currencyConverter = () => {
    if (convertInto[to]) {
      setResult(amount * convertInto[to]);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white">
      <div className="w-full max-w-lg mx-auto border border-gray-600 rounded-xl p-8 bg-gray-900 bg-opacity-40 backdrop-blur-md shadow-lg">
        <h1 className="text-5xl font-bold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg">RateMate</span>
        </h1>
        <h2 className="text-3xl font-semibold text-center mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-200 drop-shadow-lg">Currency Converter</span>
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            currencyConverter();
          }}
          className="space-y-6"
        >
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(newAmount) => setAmount(newAmount)}
            isAmountDisabled={false} 
            currency={from}
            onCurrencyChange={(newCurrency) => setFrom(newCurrency)}
            isCurrencyDisabled={false}
            allCurrencies={allCurrencies}
          />

          <div className="flex justify-center my-4">
            <button
              type="button"
              className="transform hover:scale-110 transition-transform border-2 border-gray-500 rounded-full bg-gray-800 text-white p-3 shadow-lg"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={result}
            onAmountChange={(newAmount) => setResult(newAmount)}
            isAmountDisabled={true}
            currency={to}
            onCurrencyChange={(newCurrency) => setTo(newCurrency)}
            isCurrencyDisabled={false}
            allCurrencies={allCurrencies}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gradient-to-l transition-colors"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </form>
      </div>
    </div>
  );
}

export default App;
