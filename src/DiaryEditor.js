import { useState } from "react";

const DiaryEdiror = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {

    setState({
      ...state,
      [e.target.name]:e.target.value,
    })
  }

  const handleSubmit = () => {
    console.log(state);
    alert('저장 성공')

  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={state.author}
          name="author"
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={
            handleChangeState
              /**
               * ...state(고정된 값)을 먼저 적고 그 다음으로 변경하는 값을 적어야 된다.
               * 위에서 부터 아래로 읽어 내리기 때문에 순서가 뒤바뀌면 변경된 값(content: e.target.value,)이
               * ...state보다 먼저 저장 되어서 고정되기 때문에 값을 변경할수 없다.
               */
              }
        />
        <div>
          <select 
            name="emotion" 
            value={state.emotion} 
            onChange={handleChangeState}>

            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
      </div>
    </div>
  );
};

/**
 *
 * const [content,setContent] = useState("");
 *
 * <textarea value={content} onChange={(e)=>{
 *       setContent(e.target.value)}}/>
 *
 * textarea에 value 값으로 매겨진 content는 useState에 선언된 초기값을 반영한다.
 *
 * onChange 라는 이벤트 요소를 넣어주어 내부에 callback함수를 선언하고 파라미터로
 * e(event)를 넣어준뒤 seContent의 파라미터로 e.target.value 를 넣어주면
 *
 * 이벤트 객체(e)가 변화한 값(외부에서 입력 받거나 변화한 값)을 위에서 선언된
 * useState 로 전달하여 현제 값(content)이 바뀌었음을 전달한다.
 *
 * 그러면 content는 textarea 태그에 value로 삽입되었음으로 변화된 값이 반영되어
 * 브라우저 화면에 전달된다.
 *
 */

export default DiaryEdiror;
