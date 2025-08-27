import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="flex flex-col">
        {/* header section */}
        <div>
          <Header />
        </div>

        <div className="flex items-center justify-between gap-10">
          {/* sidebar */}
          <div>
            <Sidebar />
          </div>

          {/* content wrapper */}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
