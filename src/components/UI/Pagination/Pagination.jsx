import React from "react";

import "./pagination.css";
const max_items = 9;
const max_left = (max_items - 1) / 2;

export default function Pagination({ 
    limit, 
    total, 
    offset, 
    setOffset 
}) {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - max_left, 1);

  return (
    <ul>
      {Array.from({ length: max_items })
        .map((_, index) => index + first)
        .map((page) => (
          <li>
            <button 
              onClick={() => setOffset((page - 1) * limit)}
            >
              {page}
            </button>
          </li>
        ))}
    </ul>
  );
}
