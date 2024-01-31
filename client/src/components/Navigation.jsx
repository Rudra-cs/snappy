import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-400 p-4">
      <ul className="flex justify-end gap-10 list-none m-0 p-0">
        <li className="m-0">
          <Link to="/" className="text-black font-bold no-underline">
            Home
          </Link>
        </li>
        <li className="m-0">
          <Link to="/login" className="text-black font-bold no-underline">
            Login
          </Link>
        </li>
        <li className="m-0">
          <Link to="/signup" className="text-black font-bold no-underline">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
