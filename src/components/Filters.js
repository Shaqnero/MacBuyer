import React from "react";

function Filters(props) {
  const { brand, screenSize, onBrandChange, onScreenSizeChange } = props;

  return (
    <div className="filters">
      <h2 style={{
        marginLeft: '-23rem',
        padding: '5px 10px',
        backgroundColor: '#fff',
        color: '#7cc',
        borderRadius: '8px',
        cursor: 'pointer',

      }}>Filters</h2>

      {/* Filter Section */}
      <div className="filter-section" style={{
        marginLeft: '450px',

      }}>
        <div className="form-group">
          <label htmlFor="brand-select">Brand:</label>
          <select id="brand-select" value={brand} onChange={onBrandChange}>
            <option value="">All</option>
            <option value="Mac">Mac</option>
            <option value="iPad">iPad</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="screen-size-select">Screen Size:</label>
          <select
            id="screen-size-select"
            value={screenSize}
            onChange={onScreenSizeChange}
          >
            <option value="">All</option>
            <option value="11-13">11" - 13"</option>
            <option value="14-16">14" - 16"</option>
            <option value="17-19">17" - 19"</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
