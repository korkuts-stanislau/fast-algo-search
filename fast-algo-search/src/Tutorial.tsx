import { useState } from "react"

type TutorialProps = {

}

const buttonClassName = "text-green-300"

export const Tutorial: React.FC<TutorialProps> = (props) => {
    const [opened, setOpened] = useState(false);

    return <div className="mt-6">
        <h1 className="text-2xl text-center cursor-default">
            Tutorial
            {!opened && <span className="mx-4 bg-green-300 text-black px-[4px] py-[2px] rounded-sm cursor-pointer"
                                onClick={() => setOpened(true)}>
                Open
            </span>}
            {opened && <span className="mx-4 bg-red-300 text-black px-[4px] py-[2px] rounded-sm cursor-pointer"
                                onClick={() => setOpened(false)}>
                Close
            </span>}
        </h1>
        {opened && <div className="bg-gray-600 rounded-md m-auto w-[500px] mt-4 p-4">
            <ul className="list-disc px-4 cursor-default">
                <li>To pause/resume video press <span className={buttonClassName}>Space</span></li>
                <li>To mute video press <span className={buttonClassName}>M</span></li>
                <li>To unmute video press <span className={buttonClassName}>U</span></li>
                <li>To restart algorithm press <span className={buttonClassName}>R</span></li>
                <li>To show all algorithms press <span className={buttonClassName}>A</span> (In process)</li>
                <li>To show easiest algorithms press <span className={buttonClassName}>E</span> (In process)</li>
            </ul>
        </div>}
    </div>
}