// Sidebar.js

const Sidebar = () => {
    return (
        <div className="h-screen w-11 flex">
            {/* container */}
            <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
                {/* Side Nav Bar */}
                <div className="h-16 flex items-center w-full">
                    {/* Logo Section */}
                    <a className="h-6 w-6 mx-auto" href="http://svelte.dev/">
                        <img
                            className="h-6 w-6 mx-auto"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
                            alt="svelte logo"
                        />
                    </a>
                </div>

                <ul>
                    {/* Items Section */}
                    <li className="hover:bg-gray-100">
                        <a
                            href="."
                            className="h-16 px-3 flex  justify-center items-center w-full focus:text-orange-500"
                        >
                            <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            </svg>
                        </a>
                    </li>
                    {/* ... add more list items as needed ... */}
                </ul>

                <div className="mt-auto h-16 flex items-center w-full">
                    {/* Action Section */}
                    <button
                        className="h-16  mx-auto flex  justify-center items-center
              w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
                    >
                        <svg
                            className="h-5 w-5 text-red-700"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
