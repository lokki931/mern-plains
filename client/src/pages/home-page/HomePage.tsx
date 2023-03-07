import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { palnesAsync } from '../../features/planes/planesSlice';
import { createAsync, resetErrors } from '../../features/plane/planeSlice';
import { Link } from 'react-router-dom';

function HomePage() {
  const { planes, isLoding } = useAppSelector((state) => state.planes);

  const { errors } = useAppSelector((state) => state.plane);

  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [capacity, setCapacity] = React.useState('');
  const [file, setFile] = React.useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const dispath = useAppDispatch();

  const handleCreatePlane = React.useCallback(() => {
    const appForm: FormData = new FormData();
    appForm.append('name', name);
    appForm.append('price', price);
    appForm.append('description', description);
    appForm.append('capacity', capacity);
    if (file) appForm.append('planeImage', file);

    dispath(createAsync(appForm)).then((res) => {
      dispath(palnesAsync());
    });
  }, [capacity, description, dispath, name, file, price]);

  React.useEffect(() => {
    dispath(palnesAsync());
    dispath(resetErrors());
  }, [dispath]);

  if (isLoding) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <form>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          {errors && errors.name && errors.name.message}
        </label>
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors && errors.price && errors.price.message}
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors && errors.description && errors.description.message}
        </label>
        <label>
          Capacity:
          <input
            type="text"
            name="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
          {errors && errors.capacity && errors.capacity.message}
        </label>
        <label>
          planeImage:
          <input type="file" name="planeImage" onChange={handleFileChange} />
          {errors && errors.planeImage && errors.planeImage.message}
        </label>
        <button type="button" onClick={handleCreatePlane}>
          add
        </button>
      </form>
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
