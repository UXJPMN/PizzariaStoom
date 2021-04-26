import './style.scss';

function SelectRadio({ callback, items, selected }) {
  function sendCallback(event) {
    const { value } = event.target;

    items.forEach((item) => {
      const normalizedItem = normalizeString(item);
      const normalizedValue = normalizeString(value);

      if(normalizedItem !== normalizedValue) {
        const element = document.querySelector(`#${normalizedItem}Input`);

        element.checked = false;
      }
    });
    callback(value);
  }

  const normalizeString = (text) => text.replace(/[^a-zA-Z0-9]/g, '');

  const listItems = items?.map((item) => {
    const defaultChecked = selected.includes(item);
    const normalizedItem = normalizeString(item);
    const input = (
      <input
        type="radio"
        id={`${normalizedItem}Input`}
        name={`${normalizedItem}Input`}
        value={item}
        onInput={sendCallback}
        defaultChecked={defaultChecked}
      />
    );

    return (
      <li key={item}>
        {input}
        <label for={`${normalizedItem}Input`}>{item}</label>
      </li>
    );
  });

  return(
    <div className="select-radio">
      <ul>{ listItems }</ul>
    </div>
  );
}

export default SelectRadio;
