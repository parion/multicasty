import styled from 'styled-components';
import { PlayCircle } from 'react-feather';
import useSWR from 'swr';

const BackdropWrapper = styled.div<{ path: string }>`
  background: content-box linear-gradient(hsla(217,36%,16%,0),hsla(217,36%,16%,50%) 70%,hsl(217,36%,16%) 90%),url('https://www.themoviedb.org/t/p/original${(props) => props.path}') center / cover;
  min-height: 250px;
  position: relative;
  color: white;
  `;
const PlayCircleIcon = styled(PlayCircle)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
const Header = styled.h1`
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
`;

const fetcher = async (url: string) => {
  const res = await fetch(url, { body: Request.json() });
  const data = await res.json();
  console.log(data);

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export default function ShowBackdrop({ path }) {
  console.log('b4');
  const { data } = useSWR('/api/themoviedb/config', fetcher);
  console.log(data);
  return (
    <BackdropWrapper path={path}>
      <PlayCircleIcon size={36} />
      <Header>The Mandalorian</Header>
    </BackdropWrapper>
  );
}
