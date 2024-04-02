import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./Pages/";
import NoPage from "./Pages/NoPage";

//libraries css
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import store from "./Redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

function App() {
  useEffect(() => {
    toast.success("Welcome to Todo List Manager!");
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} /> // Home Page
            <Route path="*" element={<NoPage />} /> // 404 Page
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
