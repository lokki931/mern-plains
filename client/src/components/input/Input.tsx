import React from 'react';
import styles from './styles.module.css';
type InputProps = {
  type: string;
  name: string;
  containerClassname?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null | undefined;
};
const Input: React.FC<InputProps> = ({
  type = 'text',
  name = '',
  containerClassname = '',
  placeholder = '',
  onChange = () => null,
  error = '',
}) => {
  return (
    <div className={`${styles.container} ${containerClassname}`}>
      <input
        type={type}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
