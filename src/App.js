import NavBar from "./components/NavBar";
import Filtration from "./components/Filtration";
import MainSection from "./containers/MainSection";
import { data } from "./components/Data"
import { useState } from "react";

function App() {
  const [allData, setAllData] = useState(data);
  const allCategory = ["All", ...new Set(data.map((ele) => ele.category))];
  function filterData(cat) {
    if (cat === "all") {
      setAllData(data)
    } else {
      const finalData = data.filter((e) => {
        return e.category === cat;
      })
      setAllData(finalData);
    }
  }

  function searchForMeal(word) {
    const finalData = data.filter(e => (e.title).toLocaleLowerCase() === word);
    setAllData(finalData);
  }
  return (
    <div className="app">
      <NavBar searchMeal={searchForMeal} />
      <Filtration filter={filterData} category={allCategory} />
      <MainSection data={allData} />
    </div>
  );
}

export default App;
