import { useState, CSSProperties } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red'
};

const LoadingScreen = () => {
  const [loading] = useState(true);
  const [color] = useState('#ffffff');

  return (
    <div className="flex w-full h-full items-center justify-center">
      <ClipLoader color={color} loading={loading} cssOverride={override} size={150} />
    </div>
  );
};

export default LoadingScreen;
