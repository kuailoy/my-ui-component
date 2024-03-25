import { useRef, useState } from 'react';
import { Confirm, OnChange } from './components/confirm';

function App() {
  // Availabe amount should be get from api, here is a demo.
  const available = 2;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<number>(available)

  const onChange: OnChange = (e) => {
    console.log('e.target.value: ', e.target.value);
    setInputValue(Number(e.target.value))
  }

  const handleQuickButtonClick = (id: number | string) => {
    switch (id) {
      case 1:
        // max
        setInputValue(available);
        break;
      case 2:
        // 1/2
        setInputValue(Number((available / 2).toFixed(2)));
        break;
      case 3:
        // 1/3
        setInputValue(Number((available / 3).toFixed(2)));
        break;
      default:
    }
  };

  const onConfirm = () => {
    console.log('onConfirm');
  }

  const props = {
    payer: 'atom1xy5ym6wwz9a',
    receiver: 'osmo1xy5ym6wwz9a',
    payerAvatar: 'https://picsum.photos/30',
    receiverAvatar: 'https://picsum.photos/22',
    available,
    exchangeRate: 1013,
    inputRef,
    value: inputValue,
    onChange,
    onQuickButtonClick: handleQuickButtonClick,
    onConfirm,
  };

  return (
    <>
      <Confirm {...props} />
    </>
  );
}

export default App;
