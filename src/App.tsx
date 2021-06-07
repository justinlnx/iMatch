import {
  BasicInfo,
  SearchQueryContextProvider,
  Education,
  WorkExperience,
  ProgrammingLanguage,
  DevelopmentPicker,
} from './components';

function App() {
  return (
    <div className="App">
      <SearchQueryContextProvider>
        <BasicInfo />
        <Education />
        <WorkExperience />
        <ProgrammingLanguage />
        <DevelopmentPicker />
      </SearchQueryContextProvider>
    </div>
  );
}

export default App;
