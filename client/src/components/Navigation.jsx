import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa"; // Import the chat icon

const Navigation = () => {
    return (
        <nav className="bg-violet-500 p-4 flex ">
            <Link
                to="/"
                className="text-white font-bold no-underline flex items-center"
            >
                <FaComment className="h-5 w-5 mr-1" />
                Snappy
            </Link>
            <ul className="flex ml-auto gap-10 list-none m-0 p-0">
                <li className="m-0">
                    <Link to="/" className="text-white font-bold no-underline">
                        Home
                    </Link>
                </li>
                <li className="m-0">
                    <Link
                        to="/login"
                        className="text-white font-bold no-underline"
                    >
                        Login
                    </Link>
                </li>
                <li className="m-0">
                    <Link
                        to="/signup"
                        className="text-white font-bold no-underline"
                    >
                        Signup
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
