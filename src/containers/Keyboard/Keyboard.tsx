import "./Keyboard.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { add, remove, check } from './KeyboardSlice.ts';

const Keyboard = () => {
  const keys = ['1','2','3','4','5','6','7','8','9'];
  const dispatch = useDispatch();
  const keyboardValue = useSelector((state: RootState) => state.keyboard.value);

  let hideSymbol: string[] = [];
  if (keyboardValue.length <= 4) {
    const symbolsArr = keyboardValue.split('');
    hideSymbol = symbolsArr.map(() => '*');
  }

  return (
    <div className="container">
      <div className={`pin-display 
      ${keyboardValue === 'Access Granted!' && 'granted'}
      ${keyboardValue === 'Access Denied!' && 'denied'}`}>
        { keyboardValue.length <= 4 ? hideSymbol : keyboardValue } </div>
      <div className="keyboard">
        {keys.map(key => (
          <button key={key} onClick={() => dispatch(add(key))} className="key">{key}</button>
        ))}
        <button className="key" onClick={() => dispatch(remove())}>←</button>
        <button className="key" onClick={() => dispatch(add('0'))}>0</button>
        <button className="key" onClick={() => dispatch(check())}>E</button>
      </div>
    </div>
  );
};

export default Keyboard;