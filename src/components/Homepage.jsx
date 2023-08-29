import { LoginPage } from "./LoginPage";

export const Homepage = ({ token,  handleUserLogin }) => {
    console.log(token, "TOKEN")
  return (
    <div>
      {token ? (
        <div className="w-75 mt-3 p-2 mx-auto text-center">Home page!</div>
      ) : (
        <div className="border w-25 mt-3 rounded p-2 mx-auto text-center">
          <LoginPage handleUserLogin={handleUserLogin} />
        </div>
      )}
    </div>
  );
};
