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
import {
  cornersOnlyAlgos,
  edgesOnlyAlgos,
  gAlgos,
  oneSetAdjCornersAlgos,
  oneSetDiagCornersAlgos,
} from './PllAlgosLists';
import { UserAlgoInfo } from './Types';

const defaultUserAlgosInfo: UserAlgoInfo[] = ocllAlgos
  .concat(
    tscwAlgos,
    epAlgos,
    ifAlgos,
    kaAlgos,
    lAlgos,
    bAlgos,
    oAlgos,
    cornersOnlyAlgos,
    edgesOnlyAlgos,
    gAlgos,
    oneSetAdjCornersAlgos,
    oneSetDiagCornersAlgos,
  )
  .map((algo) => {
    return { title: algo.title, isLearned: false, isInTrainer: false };
  });

export const getFromStorageOrGenerate = (): UserAlgoInfo[] => {
  const userAlgos = localStorage.getItem('userAlgos');
  if (userAlgos === null) {
    return defaultUserAlgosInfo;
  } else {
    return JSON.parse(userAlgos);
  }
};

export const saveToStorage = (userAlgosInfo: UserAlgoInfo[]) => {
  localStorage.setItem('userAlgos', JSON.stringify(userAlgosInfo));
};

export const clearStorage = () => {
  localStorage.removeItem('userAlgos');
};
