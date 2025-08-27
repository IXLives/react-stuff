import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectCard from "./components/ProjectCard";
import ReactTacToe from "./routes/ReactTacToe";

// Define projects once — homepage grid & routes use the same list
const projects = [
  {
    name: "React-Tac-Toe",
    path: "/tic-tac-toe",
    component: ReactTacToe,
    img: "/react-tac-toe.png", // from /public
    description: "Classic Tic-Tac-Toe with React & Tailwind",
  },
];

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 p-8">
        <header className="mb-10">
          <Link to="/" className="text-4xl font-bold tracking-wide text-oxford-900">
            My Project Showcase
          </Link>
        </header>

        <Routes>
          {/* Homepage grid of projects */}
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                  <ProjectCard
                    key={p.name}
                    name={p.name}
                    path={p.path}
                    img={p.img}
                    description={p.description}
                  />
                ))}
              </div>
            }
          />

          {/* Dynamic project routes */}
          {projects.map((p) => (
            <Route key={p.name} path={p.path} element={<p.component />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}
