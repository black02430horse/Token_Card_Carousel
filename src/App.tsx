import { CarouselComponent } from "./components";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <CarouselComponent items={data} />
    </div>
  );
}

export default App;
