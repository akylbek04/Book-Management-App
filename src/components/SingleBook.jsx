import { Button } from "reactstrap";

export const SingleBook = ({ title, author, isbn, img, toggle, id }) => {
  return (
    // <div className="border p-1 text-center">
    <div className="recipe-card rounded p-1 text-center">
      <img className="img-fluid mb-2" src={img} alt="" />
      <p>
        Title: <b>{title}</b>
      </p>
      <p>
        Author:{" "}
        {author.length ? (
          author
        ) : (
          <strong className="bg-warning p-1 border rounded">N/A</strong>
        )}
      </p>
      <p>ISBN: {isbn}</p>
      <Button
        color="secondary"
        onClick={() => toggle(id)}
        className="cursor-pointer"
      >
        View Book Details
      </Button>
      {/* <Button color="primary">View Book Details</Button> */}
    </div>
  );
};
