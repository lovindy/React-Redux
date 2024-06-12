import React from "react";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const today = new Date();

  // Function to calculate expiry date
  const calculateExpireDate = (days) => {
    const expireDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000);
    return expireDate.toISOString().split("T")[0]; // Return date in YYYY-MM-DD format
  };

  // Adding the expireDate field to each product
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
      expireDate: calculateExpireDate(7),
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 3,
      expireDate: calculateExpireDate(5),
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 1,
      expireDate: calculateExpireDate(3),
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 4,
      expireDate: calculateExpireDate(10),
    },
  ];

  // Config for the table
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
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Squared",
      render: (fruit) => <div>${fruit.score ** 2}</div>,
      sortValue: (fruit) => fruit.score ** 2,
    },

    {
      label: "Expire Date",
      render: (fruit) => <div>{fruit.expireDate}</div>,
      sortValue: (fruit) => new Date(fruit.expireDate), // Convert to Date object
    },
  ];

  // Key function
  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
