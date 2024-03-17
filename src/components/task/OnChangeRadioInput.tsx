import { useState } from 'react';
import { css } from '../../../styled-system/css';
import { flex } from '../../../styled-system/patterns';

function OnChangeRadioInput() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <fieldset className={flex({ gap: 2, justifyContent: 'center' })}>
        <legend className={css({ textAlign: 'center' })}>
          클래스에 대해 솔직한 의견을 주시면, <br />
          강사님에게 전달하여 개선하도록하겠습니다
        </legend>
        {[1, 2, 3, 4, 5].map((value) => (
          <div
            key={value}
            className={flex({ align: 'center', justify: 'center' })}
          >
            <label
              htmlFor={`radio${value}`}
              className={css({
                position: 'absolute',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: selectedValue === value.toString() ? 'white' : 'black',
              })}
            >
              {value}
            </label>
            <input
              id={`radio${value}`}
              type="radio"
              className={inputStyles}
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

export default OnChangeRadioInput;

const inputStyles = css({
  width: 16,
  height: 16,
  outline: 'none',
  appearance: 'none',
  borderRadius: 'full',
  shadow: 'md',
  border: '1px solid lightgray',
  _checked: { bg: 'blue.400' },
});
