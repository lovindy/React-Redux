import React from "react";
import Table from "./Table";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import useSort from "../hook/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  // 4. Call the hook, Destructure the properties in as arguments to the hook
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  // this function is for updating the config
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200 rounded"
          onClick={() => setSortColumn(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // this funciton is used to get the icons
  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <TiArrowSortedUp />
          <TiArrowSortedDown />
        </div>
      );
    }

    if (sortOrder === null) {
      return (
        <div>
          <TiArrowSortedUp />
          <TiArrowSortedDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <TiArrowSortedUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <TiArrowSortedDown />
        </div>
      );
    }
  }

  // 5. Return the JSX
  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

export default SortableTable;
