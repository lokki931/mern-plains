import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { createAsync, resetErrors } from '../../features/plane/planeSlice';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input';

const CreatePlanePage: React.FC = () => {
  const navigate = useNavigate();
  const { errors, isLoding } = useAppSelector((state) => state.plane);
  const dispatсh = useAppDispatch();
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

  const handleCreatePlane = React.useCallback(() => {
    const appForm: FormData = new FormData();
    appForm.append('name', name);
    appForm.append('price', price);
    appForm.append('description', description);
    appForm.append('capacity', capacity);
    if (file) appForm.append('planeImage', file);

    dispatсh(createAsync(appForm)).then((res) => {
      if (res.meta.requestStatus === 'fulfilled') {
        navigate(`/plane/${res.payload._id}`, { replace: true });
      }
    });
  }, [capacity, description, dispatсh, name, file, price, navigate]);

  React.useEffect(() => {
    dispatсh(resetErrors());
  }, [dispatсh]);

  if (isLoding) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/">Go Home</Link>
      <form>
        <Input
          type="text"
          name="name"
          placeholder="Название самолёта"
          error={errors && errors.name && errors.name.message}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          name="price"
          placeholder="Цена самолёта"
          error={errors && errors.price && errors.price.message}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Input
          type="text"
          name="description"
          placeholder="Описание самолёта"
          error={errors && errors.description && errors.description.message}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          type="text"
          name="capacity"
          placeholder="Описание самолёта"
          error={errors && errors.capacity && errors.capacity.message}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <Input
          type="file"
          name="planeImage"
          error={errors && errors.planeImage && errors.planeImage.message}
          onChange={handleFileChange}
        />
        <button type="button" onClick={handleCreatePlane}>
          add
        </button>
      </form>
    </div>
  );
};

export default CreatePlanePage;
