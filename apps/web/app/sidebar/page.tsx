import Sidebar from "./sidebar";

function HomePage() {
  return (
    <div className="min-h-screen flex gap-4 items-center justify-center">
      <Sidebar title="App Navigation">
        <nav>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block p-2 ">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block p-2">
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </Sidebar>
      Hey There
    </div>
  );
}
export default HomePage;
