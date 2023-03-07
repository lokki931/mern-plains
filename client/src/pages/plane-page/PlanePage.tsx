import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAsync } from '../../features/plane/planeSlice';
import NotFoundPage from '../not-found-page/NotFoundPage';

const PlanePage: React.FC = () => {
  const { id } = useParams();
  const { plane, isLoding } = useAppSelector((state) => state.plane);
  const { _id, capacity, description, name, planeImage, price } = plane;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAsync(String(id)));
  }, [dispatch, id]);
  if (id !== _id) {
    return <NotFoundPage />;
  }
  if (isLoding) return <p>Loading...</p>;

  return (
    <div>
      <Link to="/">Go Home</Link>
      <div>{name}</div>
      <div>{description}</div>
      <div>{capacity}</div>
      <div>{price} $</div>
      <div>{planeImage && <img src={planeImage} alt={name} />}</div>
    </div>
  );
};

export default PlanePage;
