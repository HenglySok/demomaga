import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import RootLayout from "./Layouts/root/RootLayout.jsx";
import Feature from "./Pages/Feature.jsx";
import SignIn from "./Pages/auth/SignIn.jsx";
import SignUp from "./Pages/auth/SignUp.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import MessageConfirm from './Pages/auth/accountconfirmation/MessageConfirm.jsx'
import VerifyAccount from "./Pages/auth/accountconfirmation/VerifyAccount.jsx";
import ForgotPassworld from "./Pages/auth/ForgotPassworld.jsx";
import ResetPassword from "./Pages/auth/ResetPassword.jsx";
import Admin from "./Pages/admin/Admin.jsx";
import TableManga from "./components/adminComponent/MangaList/TableManga.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {" "}
      {/* Add store prop */}
      <BrowserRouter>
        <Routes>
          <Route path="table-manga" element={<TableManga />} />
          <Route path="sign_in" element={<SignIn />} />
          <Route path="sign_up" element={<SignUp />} />
          <Route path="confirm-account" element={<VerifyAccount />} />
          <Route path="message_comfirm" element={<MessageConfirm />} />
          <Route path="forgot-password" element={<ForgotPassworld />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<RootLayout />}>
            <Route index element={<App />} />

            <Route path="feature" element={<Feature />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
