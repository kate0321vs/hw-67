import "./Keyboard.css"

const Keyboard = () => {
  const keys = ['1','2','3','4','5','6','7','8','9','←', '0', 'E' ]
  return (
    <div className="container">
      <div className="pin-display"></div>
      <div className="keyboard">
        {keys.map(key => (
           <button className="key">{key}</button>
          ))}
      </div>
    </div>
  );
};

export default Keyboard;