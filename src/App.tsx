import { useRef, useState } from 'react';
import { Confirm, OnChange } from './components/confirm';

function App() {
  // Availabe amount should be get from api, here is a demo.
  const available = 2;
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<number>(available);

  const onChange: OnChange = (e) => {
    console.log('e.target.value: ', e.target.value);
    setInputValue(Number(e.target.value));
  };

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
  };

  const props = {
    payer: {
      name: 'atom1xy5ym6wwz9a',
      id: 123,
      avatar: 'https://picsum.photos/30',
    },
    receiver: {
      name: 'osmo1xy5ym6wwz9a',
      id: 321,
      avatar: 'https://picsum.photos/22',
    },
    available,
    exchangeRate: 1013,
    inputRef,
    value: inputValue,
    onChange,
    onQuickButtonClick: handleQuickButtonClick,
    onConfirm,
    onEditAccount: () => {
      console.log('edit');
    },
  };

  return (
    <>
      <Confirm {...props} />
    </>
  );
}

export default App;
