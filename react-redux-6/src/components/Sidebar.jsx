import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/button" },
    { label: "Navigation", path: "/navigation" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
    { label: "CounterReducer", path: "/counterReducer" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2">
        {link.label}
      </Link>
    );
  });

  return (
    <div className="ml-20 sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
