import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDetails from "./components/UserDetails";
import { fetchUsers, setPage } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch();
  const { users, currentPage } = useSelector((state) => state.users);

  const totalPages = users.length;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setPage(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const currentUser = users[currentPage - 1];

  return (
    <div className="App">
      {currentUser && <UserDetails user={currentUser} />}
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
