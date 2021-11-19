import "./App.css";

import { Carousel } from "./components";

const images: string[] = [
  "https://via.placeholder.com/150x300?text=1",
  "https://via.placeholder.com/150x300?text=2",
  "https://via.placeholder.com/150x300?text=3",
  "https://via.placeholder.com/150x300?text=4",
  "https://via.placeholder.com/150x300?text=5",
  "https://via.placeholder.com/150x300?text=6",
  "https://via.placeholder.com/150x300?text=7",
];

function App() {
  return (
    <div className="App">
      <Carousel images={images} />
    </div>
  );
}

export default App;
