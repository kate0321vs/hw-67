import "./Keyboard.css"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store.ts';
import { add } from './KeyboardSlice.ts';

const Keyboard = () => {
  const keys = ['1','2','3','4','5','6','7','8','9'];
  const dispatch = useDispatch();
  const keyboardValue = useSelector((state: RootState) => state.keyboard.value)

  return (
    <div className="container">
      <div className="pin-display"> { keyboardValue } </div>
      <div className="keyboard">
        {keys.map(key => (
           <button key={key} onClick={() => dispatch(add(key))}  className="key">{key}</button>
          ))}
      </div>
    </div>
  );
};

export default Keyboard;