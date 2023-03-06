import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAsync } from '../../features/plane/planeSlice';

const PlanePage: React.FC = () => {
  const { id } = useParams();
  const { plane, isLoding } = useAppSelector((state) => state.plane);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAsync(String(id)));
  }, [dispatch, id]);
  if (isLoding) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">Go Home</Link>
      <div>{plane?.name}</div>
      <div>{plane?.description}</div>
      <div>{plane?.capacity}</div>
      <div>{plane?.price} $</div>
      <div>
        <img src={plane?.planeImage} alt={plane?.name} />
      </div>
    </div>
  );
};

export default PlanePage;
