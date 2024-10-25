import { React, useState } from 'react';
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
      <div className="w-full max-w-lg mx-auto border border-gray-600 rounded-xl p-6 md:p-8 bg-gray-900 bg-opacity-40 backdrop-blur-md shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32" // Adjusted size
            height="32" // Adjusted size
            fill="currentColor" // Use current text color
            className="bi bi-currency-exchange mr-2" // Margin for spacing
            viewBox="0 0 16 16"
          >
            <path d="M0 5a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05q-.001-.07.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.5 3.5 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98q-.004.07-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5m16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674z" />
          </svg>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-lg">RateMate</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
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
