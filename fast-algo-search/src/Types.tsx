export type Algo = {
  title: string;
  imgRef: string;
  videoSrc: string;
  startSecond: number;
  endSecond: number;
};

export type UserAlgoInfo = {
  title: string;
  isLearned: boolean;
};

export type Filter = 'all' | 'unlearned';

export type AlgoGroup = { name: string; group: Algo[] };
