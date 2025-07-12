import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

function RootLayout() {
  // const [hasToken, setHasToken] = useState(false);

  // // Check for token on mount and when localStorage changes
  // useEffect(() => {
  //     const checkToken = () => {
  //         const token = localStorage.getItem("token");
  //         setHasToken(!!token);
  //     };

  //     // Initial check
  //     checkToken();

  //     // Listen for storage events (changes from other tabs)
  //     const handleStorageChange = () => {
  //         checkToken();
  //     };

  //     window.addEventListener('storage', handleStorageChange);

  //     // Cleanup
  //     return () => {
  //         window.removeEventListener('storage', handleStorageChange);
  //     };
  // }, []);

  return (
    // <>
    //     {hasToken ? <NavBar /> : <NavBarWithOutLogin />}
    //     <Outlet context={{ setHasToken }} />
    //     <Footer />
    // </>
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
