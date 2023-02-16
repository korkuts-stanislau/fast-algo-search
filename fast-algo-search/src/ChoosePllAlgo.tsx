import { cornersOnlyAlgos, edgesOnlyAlgos, gAlgos, oneSetAdjCornersAlgos, oneSetDiagCornersAlgos } from "./PllAlgosLists";
import { Algo } from "./Types";

type ChoosePllAlgoProps = {
    activeAlgo: Algo;
    setAlgo: (algo: Algo) => void;
}

const commonPllClassName = "grid grid-cols-3 gap-4";

export const ChoosePllAlgo: React.FC<ChoosePllAlgoProps> = (props) => {
    const PllAlgoButton: React.FC<{algo:Algo}> = (algoProps) => {
        const {algo} = algoProps;
        return <div onClick={() => props.setAlgo(algo)}
                    className={`p-3 cursor-pointer rounded-md hover:bg-red-800 active:bg-red-900 w-[100px] ${
                        algo.title === props.activeAlgo.title ? "bg-emerald-800" : "bg-red-700"
                    }`}>
                <span>{algo.title}</span>
            </div>
    }

    return <div className="pt-3 px-10">
        <h1 className="text-3xl font-bold mb-8">PLL</h1>
        <hr className="my-4 "/>
        <div className={commonPllClassName}>
            {edgesOnlyAlgos.map(a => <PllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonPllClassName}>
            {cornersOnlyAlgos.map(a => <PllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonPllClassName}>
            {oneSetAdjCornersAlgos.map(a => <PllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonPllClassName}>
            {oneSetDiagCornersAlgos.map(a => <PllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonPllClassName}>
            {gAlgos.map(a => <PllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
    </div>
}