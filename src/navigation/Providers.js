import {Provider as TrackPlayerProvider} from '../context/TrackPlayerContext';

export default function Providers({children}) {
  return <TrackPlayerProvider>{children}</TrackPlayerProvider>;
}
