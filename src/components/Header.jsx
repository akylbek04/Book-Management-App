import { Form, Button } from "reactstrap";
import { DebounceInput } from "react-debounce-input";

export const Header = ({ activepage, prev, next, query, setQuery, totalPages }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header className="text-center mb-4">
      <h1>Books Management App</h1>
      <div className="d-flex justify-content-center align-items-center">
        <Form
          onSubmit={handleFormSubmit}
          className="d-flex justify-content-center align-items-center"
        >
          <DebounceInput
            className="form-control p-2 w-100"
            type="text"
            minLength={2}
            debounceTimeout={1500}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            placeholder="Search book title..."
          />
          {/* <Button color="primary" type="submit">
            SEARCH
          </Button> */}
        </Form>
        <div className="ms-5 border border-lightgrey rounded p-2">
          <Button onClick={prev} disabled={activepage === 1} >Previous</Button>
          <Button color="warning" disabled className="mx-2">
            {activepage}/{totalPages}
          </Button>
          <Button onClick={next} disabled={activepage === totalPages} >Next</Button>
        </div>
      </div>
    </header>
  );
};
