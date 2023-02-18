import { AlgoGroups } from './AlgoGroups';
import { AlgoTile } from './AlgoTile';
import {
  cornersOnlyAlgos,
  edgesOnlyAlgos,
  gAlgos,
  oneSetAdjCornersAlgos,
  oneSetDiagCornersAlgos,
} from './PllAlgosLists';
import { Algo, AlgoGroup, Filter, UserAlgoInfo } from './Types';

type ChoosePllAlgoProps = {
  activeAlgo: Algo;
  setAlgo: (algo: Algo) => void;

  userAlgosInfo: UserAlgoInfo[];
  setUserAlgoInfo: (algoInfo: UserAlgoInfo) => void;

  filter: Filter;
};

const algoGroups: AlgoGroup[] = [
  { name: 'cornersOnly', group: cornersOnlyAlgos },
  { name: 'edgesOnly', group: edgesOnlyAlgos },
  { name: 'g', group: gAlgos },
  { name: 'oneSetAdjCorners', group: oneSetAdjCornersAlgos },
  { name: 'oneSetDiagCorners', group: oneSetDiagCornersAlgos },
];

export const ChoosePllAlgo: React.FC<ChoosePllAlgoProps> = (props) => {
  return (
    <AlgoGroups
      {...props}
      title="PLL (21 case)"
      algoGroups={algoGroups}
      tileClassName="bg-red-700 hover:bg-red-800 active:bg-red-900"
      gridClassName="grid grid-cols-3 gap-4"
    />
  );
};
