import { Link } from "react-router-dom";

export default function ProjectCard({ name, path, img, description }) {
  return (
    <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition bg-white">
      {img && <img src={img} alt={name} className="mb-3 rounded-xl" />}
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={path}
        className="inline-block px-4 py-2 rounded-lg bg-oxford-900 text-lavender hover:bg-charcoal-700 transition"
      >
        View Project
      </Link>
    </div>
  );
}
