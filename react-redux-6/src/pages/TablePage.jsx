import React from "react";
import SortableTable from "../components/SortableTable";
function TablePage() {
  // data and config are dummy data
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];
  // config is the table header
  const config = [
    {
      label: "Name",
      render: (fruit) => <div>{fruit.name}</div>,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`w-6 h-6 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Price",
      render: (fruit) => <div>${fruit.score * 2}</div>,
      sortValue: (fruit) => fruit.score * 2,
    },
  ];
  // keyFn is a function that returns a unique key for each row
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    // data, config, and keyFn are passed to the Table component
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
