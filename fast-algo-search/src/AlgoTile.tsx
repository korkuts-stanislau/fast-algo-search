import { Algo, UserAlgoInfo } from './Types';

type AlgoTileProps = {
  algo: Algo;
  algoInfo: UserAlgoInfo;
  activeAlgo: Algo;
  setAlgo: (algo: Algo) => void;
  setAlgoInfo: (algo: UserAlgoInfo) => void;
  className: string;
  activeClassName: string;
};

export const AlgoTile: React.FC<AlgoTileProps> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div
        onClick={() => props.setAlgo(props.algo)}
        className={`p-3 mb-2 flex flex-col items-center gap-2 cursor-pointer rounded-md w-[100px] ${
          props.algo.title === props.activeAlgo.title
            ? props.activeClassName
            : props.className
        }`}
      >
        <div>{props.algo.title}</div>
        <img
          src={props.algo.imgRef}
          alt={props.algo.title}
          className="h-12 w-12 mb-1"
        />
      </div>
      {!props.algoInfo.isLearned && (
        <button
          className="bg-green-500 hover:bg-green-700 rounded-lg text-black py-[2px] px-[6px]"
          onClick={() =>
            props.setAlgoInfo({ ...props.algoInfo, isLearned: true })
          }
        >
          Learned
        </button>
      )}
      {props.algoInfo.isLearned && (
        <button
          className="bg-yellow-500 hover:bg-yellow-700 rounded-lg text-black py-[2px] px-[6px]"
          onClick={() =>
            props.setAlgoInfo({ ...props.algoInfo, isLearned: false })
          }
        >
          Unlearned
        </button>
      )}
    </div>
  );
};
