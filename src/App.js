import Lnb from "./component/Lnb";
import Header from "./component/Header";
import Main from "./component/Main";
import View from "./component/View";
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
            <Route path="/view/:no" element={<View />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
