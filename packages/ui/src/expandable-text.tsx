"use client";
import React, { useMemo, useState } from "react";

interface IProps {
  lines: 1 | 2 | 3 | 4 | 5;
  children: React.ReactNode;
}

export const ExpandableText: React.FC<IProps> = ({ lines, children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const className = useMemo(() => {
    if (isExpanded) {
      return "";
    }

    switch (lines) {
      case 1:
        return "line-clamp-1";
      case 2:
        return "line-clamp-2";
      case 3:
        return "line-clamp-3";
      case 4:
        return "line-clamp-4";
      case 5:
        return "line-clamp-5";
    }
  }, [isExpanded, lines]);

  return (
    <div className="flex flex-col items-start">
      <span className={`${className}`}>{children}</span>
      <button
        className="text-blue-500 hover:text-blue-700"
        onClick={toggleExpand}
      >
        {isExpanded ? "Voir moins" : "Voir plus"}
      </button>
    </div>
  );
};
