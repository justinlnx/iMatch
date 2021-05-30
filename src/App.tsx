import {
  BasicInfo,
  BasicInfoContextProvider,
} from './components';

function App() {
  return (
    <div className="App">
      <BasicInfoContextProvider>
        <BasicInfo />
      </BasicInfoContextProvider>
    </div>
  );
}

export default App;
