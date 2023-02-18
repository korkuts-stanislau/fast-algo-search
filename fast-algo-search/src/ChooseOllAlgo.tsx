import { AlgoGroups } from './AlgoGroups';
import { AlgoTile } from './AlgoTile';
import {
  bAlgos,
  epAlgos,
  ifAlgos,
  kaAlgos,
  lAlgos,
  oAlgos,
  ocllAlgos,
  tscwAlgos,
} from './OllAlgosLists';
import { Algo, AlgoGroup, Filter, UserAlgoInfo } from './Types';

type ChooseOllAlgoProps = {
  activeAlgo: Algo;
  setAlgo: (algo: Algo) => void;

  userAlgosInfo: UserAlgoInfo[];
  setUserAlgoInfo: (algoInfo: UserAlgoInfo) => void;

  filter: Filter;
};

const algoGroups: AlgoGroup[] = [
  { name: 'ocll', group: ocllAlgos },
  { name: 'tscw', group: tscwAlgos },
  { name: 'ep', group: epAlgos },
  { name: 'if', group: ifAlgos },
  { name: 'ka', group: kaAlgos },
  { name: 'l', group: lAlgos },
  { name: 'b', group: bAlgos },
  { name: 'o', group: oAlgos },
];

export const ChooseOllAlgo: React.FC<ChooseOllAlgoProps> = (props) => {
  return (
    <AlgoGroups
      {...props}
      title="OLL (57 cases)"
      algoGroups={algoGroups}
      tileClassName="bg-blue-700 hover:bg-blue-800 active:bg-blue-900"
      gridClassName="grid 2xl:grid-cols-8 lg:grid-cols-6 grid-cols-3 gap-4"
    />
  );
};
