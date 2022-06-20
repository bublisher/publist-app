import Lnb from "./component/Lnb";
import Header from "./component/Header";
import Main from "./component/Main";
import Pages from "./component/Pages";
import Notfound from "./pages/Notfound";
import GlobalStyles from "./styles/GlobalStyles";
import Styles from "./styles/Layout.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Lnb />

        <main className={Styles.content}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/pages/*" element={<Pages />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
