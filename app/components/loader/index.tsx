import "./styles.scss";
import Image from "next/image";

import {prefix} from "../../utils/prefix";

export default function Loader() {
    return <div className="loader">
       <div className="spinner">
            <Image src={`./loader.svg`} width={120} height={50} alt="Loader Image" />
            <span>Loading</span>
       </div>
    </div>
}