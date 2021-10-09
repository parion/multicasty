import ShowBackdrop from './ShowBackdrop';

export default function ShowContainer({ showInfo }) {
  return (
    <div>
      <ShowBackdrop path={showInfo.backdrop_path} />
    </div>
  );
}
