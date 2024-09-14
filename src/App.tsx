import "./App.scss";
import CardContainer from "./foundation/organisms/card-container";
import DragProvider from "./store/DragProvider";

function App() {
    return (
        <div className="App">
            <DragProvider>
                <CardContainer />
            </DragProvider>
        </div>
    );
}

export default App;
