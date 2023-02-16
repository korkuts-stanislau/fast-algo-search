import { ocllAlgos, tscwAlgos } from "./OllAlgosLists";
import { Algo } from "./Types";

type ChooseOllAlgoProps = {
    setCurrentVideoWithTime: (src: string, startSec: number) => void;
}

export const ChooseOllAlgo: React.FC<ChooseOllAlgoProps> = (props) => {
    const OllAlgoButton: React.FC<{algo:Algo}> = (algoProps) => {
        const {algo} = algoProps;
        return <div onClick={() => props.setCurrentVideoWithTime(algo.videoSrc, algo.startSecond)}
                    className="p-3 cursor-pointer bg-blue-300 rounded-md hover:bg-blue-500 w-[100px]"
                    key={algo.title}>
                <span>{algo.title}</span>
            </div>
    }

    return <div className="pt-3 px-10">
        <h1 className="text-3xl font-bold mb-8">OLL</h1>
        <hr className="my-4 "/>
        <div className="grid grid-cols-5 gap-4">
            {ocllAlgos.map(a => <OllAlgoButton algo={a}/>)}
        </div>
        <hr className="my-4 "/>
        <div className="grid grid-cols-5 gap-4">
            {tscwAlgos.map(a => <OllAlgoButton algo={a}/>)}
        </div>
        <hr className="my-4 "/>
    </div>
}