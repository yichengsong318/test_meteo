import { useParams } from 'react-router-dom';

const Detail = (): JSX.Element => {
  const { id } = useParams();

  return (
    <div className="w-full text-center font-normal text-6xl pt-24">
      <span>Meteorologic data for {id}</span>
    </div>
  );
};

export default Detail;
