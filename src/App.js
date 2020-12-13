import Header from "./Header";
import Footer from "./Footer";
import NextDays from "./NextDays";
import Today from "./Today";
import Tomorow from "./Tomorow";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <div className="row forcastCard">
          <Today />

          <div className="col-md-6 rightSide">
            <Tomorow />
            <NextDays />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
