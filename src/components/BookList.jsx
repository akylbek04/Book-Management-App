import { SingleBook } from "./SingleBook";
import "../App.css";
import { useState } from "react";
import ModalComp from "./ModalComp";
import { Modal } from "reactstrap";

export const BookList = ({
  users,
  query,
  activepage,
  bookPerPage,
  totalPages,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [info, setInfo] = useState(null);

  const filtered = users.filter((user) =>
    user.title.toLowerCase().includes(query.toLowerCase(0))
  );

  const toggle = (id) => {
    setIsOpen((prev) => !prev);
    const found = users.find((user) => user.id === id);
    setInfo(found);
  };

  const startIndex = (activepage - 1) * bookPerPage;
  const lastIndex = activepage * bookPerPage;
  const slicedBooks = filtered.slice(startIndex, lastIndex);

  const modalProps = {
    toggle,
    isOpen,
    info,
  };

  return (
    <main>
      <div className="books-container">
        {slicedBooks.length > 0 ? (
          slicedBooks.map((user) => {
            return <SingleBook key={user.id} {...user} toggle={toggle} />;
          })
        ) : (
          <div>No book found</div>
        )}
        {isOpen && <ModalComp {...modalProps} />}
      </div>
    </main>
  );
};
