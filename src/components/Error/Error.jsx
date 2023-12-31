import { Link } from "react-router-dom";
// TODO: 404 IMAGE ERROR 
import f404 from '../../assets/images/f404.webp'
export default function Error() {
    
    return (
        <div className='flex flex-col justify-center items-center'>
            <div>
                <img src={f404} alt="" />
            </div>
            <div>
                <Link
                    to={"/"}
                    // className="btn btn-ghost inline-block px-8 py-3 text-base font-semibold text-center text-black transition border border-white rounded-lg hover:bg-white hover:text-neutral"
                    className="btn btn-ghost"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    )
}
