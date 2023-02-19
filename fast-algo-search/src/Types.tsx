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
  isInTrainer: boolean;
};

export type Filter = 'all' | 'unlearned' | 'train' | 'easy';

export type AlgoGroup = { name: string; group: Algo[] };

export type AlgoScrumbles = { title: string; scrumbles: string[] };
