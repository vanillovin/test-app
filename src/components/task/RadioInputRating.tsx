import { useState } from 'react';
import { css, cx } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';

function RadioInputRating() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form>
      <fieldset className={flex({ gap: 2, justifyContent: 'center' })}>
        <legend className={css({ textAlign: 'center' })}>
          클래스에 대해 솔직한 의견을 주시면, <br />
          강사님에게 전달하여 개선하도록하겠습니다
        </legend>
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value} className={inputStyles}>
            {value}
            <input
              type="radio"
              value={value}
              name="rating"
              onChange={handleChange}
              className={css({ appearance: 'none' })}
            />
          </label>
        ))}
      </fieldset>
    </form>
  );
}

export default RadioInputRating;

const inputStyles = cx(
  center(),
  css({
    cursor: 'pointer',
    fontWeight: 'bold',
    color: 'black',
    '&:has(input:checked)': {
      color: 'white',
      bg: 'blue.400',
    },
    transition: 'all 0.125s ease-in-out',
    width: 16,
    height: 16,
    borderRadius: 'full',
    shadow: 'md',
    border: '1px solid lightgray',
  })
);
