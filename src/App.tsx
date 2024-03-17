import { useState } from 'react';
import { css } from '../styled-system/css';

function App() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <div
        className={css({
          fontSize: '2xl',
        })}
      >
        div
      </div>
      <fieldset className={css({})}>
        <legend>
          클래스에 대해 솔직한 의견을 주시면, 강사님에게 전달하여 개선하도록
          하겠습니다
        </legend>
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            })}
          >
            <label
              htmlFor={`radio${value}`}
              className={css({
                display: 'absolute',
                cursor: 'pointer',
                color: selectedValue === value.toString() ? 'white' : 'black',
              })}
            >
              {value}
            </label>
            <input
              id={`radio${value}`}
              type="radio"
              className={`w-16 h-16 appearance-none border rounded-full shadow-md 
              checked:bg-blue-400 checked:border-transparent focus:outline-none 
              ${
                selectedValue === value.toString() ? 'checked:bg-blue-400' : ''
              }`}
              value={value}
              name="rating"
              onChange={handleChange}
            />
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default App;

const styles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  rowGap: 2,
});
