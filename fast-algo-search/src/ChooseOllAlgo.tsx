import { bAlgos, epAlgos, ifAlgos, kaAlgos, lAlgos, oAlgos, ocllAlgos, tscwAlgos } from "./OllAlgosLists";
import { Algo } from "./Types";

type ChooseOllAlgoProps = {
    activeAlgo: Algo | undefined;
    setAlgo: (algo: Algo) => void;
}

const commonOllClassName = "grid 2xl:grid-cols-8 lg:grid-cols-6 grid-cols-3 gap-4";

export const ChooseOllAlgo: React.FC<ChooseOllAlgoProps> = (props) => {
    const OllAlgoButton: React.FC<{algo:Algo}> = (algoProps) => {
        const {algo} = algoProps;
        return <div onClick={() => props.setAlgo(algo)}
                    className={`p-3 flex flex-col items-center gap-2 cursor-pointer rounded-md hover:bg-blue-800 active:bg-blue-900 w-[100px] ${
                        props.activeAlgo !== undefined && algo.title === props.activeAlgo.title ? "bg-emerald-800" : "bg-blue-700"
                    }`}>
                <div>{algo.title}</div>
                <img src={algo.imgRef} alt={algo.title} className="h-12 w-12"/>
            </div>
    }

    return <div className="pt-3 px-10">
        <h1 className="text-3xl font-bold mb-8">OLL (57 cases)</h1>
        <hr className="my-4 "/>
        <div className={commonOllClassName}>
            {ocllAlgos.map(a => <OllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonOllClassName}>
            {tscwAlgos.map(a => <OllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonOllClassName}>
            {epAlgos.map(a => <OllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonOllClassName}>
            {ifAlgos.map(a => <OllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonOllClassName}>
            {kaAlgos.map(a => <OllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonOllClassName}>
            {lAlgos.map(a => <OllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonOllClassName}>
            {bAlgos.map(a => <OllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
        <div className={commonOllClassName}>
            {oAlgos.map(a => <OllAlgoButton algo={a} key={a.title}/>)}
        </div>
        <hr className="my-4 "/>
    </div>
}