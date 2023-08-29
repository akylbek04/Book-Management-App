import { UserFetch } from "../CustomHooks/fetchUsers";
import { SingleBook } from "./SingleBook";

export const BookList = () => {

  const [users] = UserFetch();
  return <main>
    <div id="books-container">
        {users.length > 0 ? users.map(user => {
            return <SingleBook key={user.id } {...user} />
        })
      : <div>No book found</div> }
    </div>
  </main>;
};
