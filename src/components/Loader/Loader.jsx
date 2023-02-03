import { Dna } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Dna
      visible={true}
      height="100"
      width="100"
      ariaLabel="dna-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '280px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'block',
      }}
      wrapperClass="dna-wrapper"
    />
  );
};
