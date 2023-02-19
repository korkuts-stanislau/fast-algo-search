import { AlgoTile } from './AlgoTile';
import { Algo, UserAlgoInfo, Filter } from './Types';

type AlgoGroupsProps = {
  activeAlgo: Algo;
  setAlgo: (algo: Algo) => void;

  userAlgosInfo: UserAlgoInfo[];
  setUserAlgoInfo: (algoInfo: UserAlgoInfo) => void;

  filter: Filter;
  algoGroups: { name: string; group: Algo[] }[];

  title: string;
  tileClassName: string;
  gridClassName: string;
};

export const AlgoGroups: React.FC<AlgoGroupsProps> = (props) => {
  return (
    <div className="pt-3 px-10">
      <h1 className="text-3xl font-bold mb-8">{props.title}</h1>
      <hr className="my-4 " />
      {props.algoGroups.map((algoGroup) => {
        const algos = algoGroup.group.filter((a) => {
          if (props.filter === 'all') return true;
          else if (props.filter === 'unlearned')
            return !props.userAlgosInfo.find((ai) => ai.title == a.title)!
              .isLearned;
          else if (props.filter === 'train')
            return props.userAlgosInfo.find((ai) => ai.title == a.title)!
              .isInTrainer;
        });
        if (algos.length === 0) return undefined;
        return (
          <div key={algoGroup.name}>
            <div className={props.gridClassName}>
              {algos.map((a) => (
                <AlgoTile
                  key={a.title}
                  algo={a}
                  algoInfo={
                    props.userAlgosInfo.find((ai) => ai.title == a.title)!
                  }
                  activeAlgo={props.activeAlgo}
                  setAlgo={props.setAlgo}
                  setAlgoInfo={props.setUserAlgoInfo}
                  className={props.tileClassName}
                  activeClassName="bg-green-700 hover:bg-green-800 active:bg-green-900"
                />
              ))}
            </div>
            <hr className="my-4 " />
          </div>
        );
      })}
    </div>
  );
};
