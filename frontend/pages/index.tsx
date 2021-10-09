import ShowContainer from './components/ShowContainer';
import model from './api/mandalorian-model';

export default function Index() {
  return (
    <div>
      <ShowContainer showInfo={model} />
    </div>
  );
}
