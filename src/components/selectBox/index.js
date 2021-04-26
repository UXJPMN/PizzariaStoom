import { useState } from 'react';
import './style.scss';

function SelectBox({ callback, items, selected, max }) {
  const [disabled, setDisabled] = useState(false);

  function sendCallback({ target }) {
    callback(target);

    const difference = items.filter((item) => !selected.includes(item));

    if(max && selected.length >= max && !disabled) {  
      difference.forEach((item) => {
        const itemId = normalizeString(`${item}Input`);
        const element = document.querySelector(`#${itemId}`);

        setDisabled(true)
        element.disabled = true;
      });
    } else if(disabled) {
      difference.forEach((item) => {
        const itemId = normalizeString(`${item}Input`);
        const element = document.querySelector(`#${itemId}`);

        setDisabled(false);
        element.disabled = false;
      });
    }
  }

  const normalizeString = (text) => text.replace(/[^a-zA-Z0-9]/g, '');
  const listItems = items?.map((item) => {
    const defaultChecked = selected.includes(item);
    const normalizedItem = normalizeString(item);
    const input = (
      <input
        type="checkbox"
        id={`${normalizedItem}Input`}
        className="box"
        name={`${normalizedItem}Input`}
        value={item}
        onInput={sendCallback}
        defaultChecked={defaultChecked}
      />
    );

    return (
      <li key={item} className="item">
        {input}
        <label for={`${normalizedItem}Input`} className="label">{item}</label>
      </li>
    );
  });

  return(
    <div className="select-box">
      <ul className="list">{ listItems }</ul>
    </div>
  );
}

export default SelectBox;
