const DiaryItem = ({
    onRemove,
    author, 
    content, 
    created_date, 
    emotion,
    id}) => {
    return <div className="DiaryItem">
        <div className="info">
            <span>
                작성자: {author} | 감정 점수: {emotion}
            </span>
            <br/>
            <span className="date">{new Date(created_date).toLoacaleString}</span>
        </div>
        <div className="content">{content}</div>
        <button onClick={()=>{
            console.log(id)
            if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
                onRemove(id);
            }}}
            >Delete</button>
    </div>
}

export default DiaryItem;