import './App.css';
import DiaryEdiror from './DiaryEditor';
import DiaryList from './DiaryList';
import {useRef,useState} from 'react';


function App() {

  const [data,setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author,content,emotion) => {

    const created_data = new Date().getTime();

    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id: dataId.current
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  return (
    <div className="App">
      <DiaryEdiror onCreate={onCreate}/>
      <DiaryList diaryList={data}/> 
    </div>
  );
}

export default App;
