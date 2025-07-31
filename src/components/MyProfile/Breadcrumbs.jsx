// src/components/Breadcrumbs.jsx
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumbs = ({className=""}) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className={`text-sm ${className} mb-4 pt-2`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className={`${className} font-medium text-base`}>
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const label = value
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li key={to} className="flex items-center space-x-2">
              <span className="select-none text-base">/</span>
              <Link
                to={to}
                className={`${
                  index === pathnames.length - 1
                    ? "font-medium text-base"
                    : "text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
