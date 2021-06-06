import {
  BasicInfo,
  SearchQueryContextProvider,
  Education,
  WorkExperience,
  ProgrammingLanguage,
} from './components';

function App() {
  return (
    <div className="App">
      <SearchQueryContextProvider>
        <BasicInfo />
        <Education />
        <WorkExperience />
        <ProgrammingLanguage />
      </SearchQueryContextProvider>
    </div>
  );
}

export default App;
