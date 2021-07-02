import {
  BasicInfo,
  SearchQueryContextProvider,
  Education,
  WorkExperience,
  PostList,
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
        <PostList />
      </SearchQueryContextProvider>
    </div>
  );
}

export default App;
