import { React, useState } from 'react';
import { motion } from 'framer-motion';
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
    <motion.div 
      className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-700 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="w-full max-w-lg mx-auto border border-gray-600 rounded-xl p-6 md:p-8 bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-2xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            RateMate
          </motion.span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
          Currency Converter
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            currencyConverter();
          }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={setAmount}
              isAmountDisabled={false}
              currency={from}
              onCurrencyChange={setFrom}
              isCurrencyDisabled={false}
              allCurrencies={allCurrencies}
            />
          </motion.div>

          <div className="flex justify-center my-4">
            <motion.button
              type="button"
              className="transform border-2 border-gray-500 rounded-full bg-gray-800 text-white p-3 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={swap}
            >
              Swap
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <InputBox
              label="To"
              amount={result}
              onAmountChange={setResult}
              isAmountDisabled={true}
              currency={to}
              onCurrencyChange={setTo}
              isCurrencyDisabled={false}
              allCurrencies={allCurrencies}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default App;


