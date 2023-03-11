import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { palnesAsync } from '../../features/planes/planesSlice';
import { Link } from 'react-router-dom';

function HomePage() {
  const { planes, isLoding } = useAppSelector((state) => state.planes);

  const dispatсh = useAppDispatch();

  React.useEffect(() => {
    dispatсh(palnesAsync());
  }, [dispatсh]);

  if (isLoding) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Link to="/create-plane">Create Plane</Link>
      <header className="App-header">
        {planes.map((plane) => (
          <p key={plane._id}>
            <Link to={'/plane/' + plane._id}>{plane.name}</Link>
          </p>
        ))}
      </header>
    </div>
  );
}

export default HomePage;
