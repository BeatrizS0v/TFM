import { useState, useRef, useEffect } from "react";
import "./Multiselect.css";

const MultiSelect = ({ options, value=[], onChange, info }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState([]);
  const wrapperRef = useRef(null);

  const showOptions = () => {
    setExpanded(!expanded);
  };

  
  useEffect(() => {
    setSelected(value || []);
  }, [value]);


  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const updated = selected.includes(value)
      ? selected.filter((v) => v !== value)
      : [...selected, value];

    setSelected(updated);
    if (onChange) {
      onChange(updated);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="multi_select" ref={wrapperRef}>
      <div className="select_box" onClick={showOptions}>
        <select className="select_multiple" disabled>
          <option>
            {selected.length > 0
              ? selected.join(", ")
              : info}
          </option>
        </select>
        <div className="over_select"></div>
      </div>

      {expanded && (
        <div className="options">
          {options.map((area) => (
            <label htmlFor={area.label} key={area.value}>
              <input
                id={area.label}
                className="option"
                type="checkbox"
                value={area.value}
                checked={selected.includes(area.value)}
                onChange={handleCheckboxChange}
              />
              {area.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
