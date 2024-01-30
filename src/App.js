import './App.css';
import DiaryEdiror from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:'차은우',
    content:'하이 1',
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id:2,
    author:'우도환',
    content:'하이 2',
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id:3,
    author:'임시완',
    content:'하이 3',
    emotion: 3,
    created_date: new Date().getTime(),
  },
]

function App() {
  return (
    <div className="App">
      <DiaryEdiror/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
