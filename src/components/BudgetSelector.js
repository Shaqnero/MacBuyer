import React from "react";

function BudgetSelector(props) {
  const { value, onChange } = props;

  return (
    <div className="budget-selector">
      <label htmlFor="budget-select">Select your budget:</label>
      <input
        type="range"
        id="budget-select"
        name="budget-select"
        min="0"
        max="5000"
        step="100"
        value={value}
        onChange={onChange}
      />
      <p>Selected budget: ${value}</p>
    </div>
  );
}

export default BudgetSelector;
