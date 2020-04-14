import React, { FC, ReactNode, useEffect, useState } from "react";

const SortableHeaderCell: FC<{
  children: ReactNode;
  onSortAscending: () => void;
  onSortDescending: () => void;
  active: boolean;
}> = ({ children, onSortAscending, onSortDescending, active }) => {
  const [sorted, setSorted] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (!active) {
      /*
       * Reset the sorting of this column if it becomes inactive.
       */
      setSorted(undefined);
    }
  }, [active]);

  return (
    <th
      style={{ cursor: "pointer" }}
      onClick={() => {
        if (sorted) {
          onSortAscending();
        } else {
          onSortDescending();
        }

        setSorted(!sorted);
      }}
    >
      {children}
      {active ? `${sorted ? "▼" : "▲"}` : null}
    </th>
  );
};

export default SortableHeaderCell;
