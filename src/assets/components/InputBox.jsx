import React, { useId } from 'react';

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
  const inputId = useId(); //this hook is responsible for the creation of unique ids
  //but it is advised in the react docs to not use this hook to generate keys in a list


  return (
    <div className="bg-gray-700 p-4 rounded-lg text-sm flex space-x-4">
      <div className="w-1/2">
        <label htmlFor={inputId} className="text-gray-400 mb-2 inline-block">
          {label}
        </label>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            onAmountChange(Number(e.target.value));
          }}
          id={inputId}
          disabled={isAmountDisabled}
          className="outline-none w-full bg-transparent py-2 text-white placeholder-gray-400"
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-400 mb-2 w-full">Choose Currency</p>

        <select
          value={currency}
          onChange={(e) => {
            onCurrencyChange(e.target.value);
          }}
          disabled={isCurrencyDisabled}
          className="rounded-lg px-2 py-2 bg-gray-600 text-white cursor-pointer outline-none"
        >
          {allCurrencies.map((i) => (
            <option key={i} value={i}>
              {i.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
