import {
  BasicInfo,
  SearchQueryContextProvider,
  Education,
  WorkExperience,
} from './components';

function App() {
  return (
    <div className="App">
      <SearchQueryContextProvider>
        <BasicInfo />
        <Education />
        <WorkExperience />
      </SearchQueryContextProvider>
    </div>
  );
}

export default App;
