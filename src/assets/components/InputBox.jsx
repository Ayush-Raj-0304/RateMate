import React, { useId } from 'react';
import { motion } from 'framer-motion';

function InputBox({
  label,
  amount,
  onAmountChange,
  isAmountDisabled = false,
  currency,
  onCurrencyChange,
  isCurrencyDisabled = false,
  allCurrencies = [],
}) {
  const inputId = useId();

  return (
    <motion.div 
      className="bg-gray-700 p-4 rounded-lg text-sm flex space-x-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-1/2">
        <motion.label 
          htmlFor={inputId} 
          className="text-gray-400 mb-2 inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {label}
        </motion.label>

        <motion.input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            onAmountChange(Number(e.target.value));
          }}
          id={inputId}
          disabled={isAmountDisabled}
          className="outline-none w-full bg-transparent py-2 text-white placeholder-gray-400"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <motion.p 
          className="text-gray-400 mb-2 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Choose Currency
        </motion.p>

        <motion.select
          value={currency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
          disabled={isCurrencyDisabled}
          className="rounded-lg px-2 py-2 bg-gray-600 text-white cursor-pointer outline-none"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {allCurrencies.map((i) => (
            <option key={i} value={i}>
              {i.toUpperCase()}
            </option>
          ))}
        </motion.select>
      </div>
    </motion.div>
  );
}

export default InputBox;
