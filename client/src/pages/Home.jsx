import ContactsSidebar from "../components/ContactsSidebar";
import Sidebar from "../components/Sidebar";
import Chat from "./Chat";

function Home() {
    return (
        <div className="flex h-screen">
            {/* Chat/Group Icons Sidebar */}
            <Sidebar />

            {/* Contacts Sidebar */}
            <ContactsSidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Navbar */}
                <nav className="flex items-center justify-between bg-gray-700 p-4">
                    <h1 className="text-white text-xl font-semibold">
                        Your App
                    </h1>
                    {/* Add your navbar content, e.g., user profile, etc. */}
                </nav>

                {/* Chat Content */}
                <Chat />
            </div>
        </div>
    );
}

export default Home;
