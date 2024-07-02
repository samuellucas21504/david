import "./styles.css";

export default function Loader() {
    return <div className="loader">
       <div className="spinner">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
                opacity=".15"
                d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
                fill="#fff"
                />
            <path
                d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
                fill="#fff"/>
        </svg>
       </div>
    </div>
}