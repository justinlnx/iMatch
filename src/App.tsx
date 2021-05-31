import {
  BasicInfo,
  BasicInfoContextProvider,
  Education,
  WorkExperience,
} from './components';

function App() {
  return (
    <div className="App">
      <BasicInfoContextProvider>
        <BasicInfo />
        <Education />
        <WorkExperience />
      </BasicInfoContextProvider>
    </div>
  );
}

export default App;
