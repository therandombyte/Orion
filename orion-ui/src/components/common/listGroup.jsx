import React from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    selectedService,
    onServiceSelect
  } = props;

  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          onClick={() => onServiceSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedService
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
