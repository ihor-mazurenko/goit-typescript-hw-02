import { FadeLoader } from 'react-spinners';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'white',
};

interface LoaderProps {
  loading: boolean;
}

export default function Loader( {loading}: LoaderProps) {
    return (
        <FadeLoader
      color="#ffffff"
      loading={loading}
      cssOverride={override}
      width={6} 
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    )
}