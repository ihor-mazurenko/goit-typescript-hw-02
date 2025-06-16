import { FadeLoader } from 'react-spinners';
const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'white',
};

export default function Loader( {loading}) {
    return (
        <FadeLoader
      color="#ffffff"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    )
}