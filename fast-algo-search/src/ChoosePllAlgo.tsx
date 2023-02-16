import { edgesOnlyAlgos } from "./PllAlgosLists";
import { Algo } from "./Types";

type ChoosePllAlgoProps = {
    setCurrentVideoWithTime: (src: string, startSec: number) => void;
}

export const ChoosePllAlgo: React.FC<ChoosePllAlgoProps> = (props) => {
    const PllAlgoButton: React.FC<{algo:Algo}> = (algoProps) => {
        const {algo} = algoProps;
        return <div onClick={() => props.setCurrentVideoWithTime(algo.videoSrc, algo.startSecond)}
                    className="p-3 cursor-pointer bg-red-300 rounded-md hover:bg-red-500 w-[100px]"
                    key={algo.title}>
                <span>{algo.title}</span>
            </div>
    }

    return <div className="pt-3 px-10">
        <h1 className="text-3xl font-bold mb-8">PLL</h1>
        <div className="grid grid-cols-5 gap-4">
            {edgesOnlyAlgos.map(a => <PllAlgoButton algo={a}/>)}
        </div>
    </div>
}