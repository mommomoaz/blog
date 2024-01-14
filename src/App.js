import logo from'./logo.svg';
import { useState } from 'react';
import './App.css';

const 오늘날짜 = () => {
  const 오늘 = new Date();
  const 년 = 오늘.getFullYear();
  const 월 = 오늘.getMonth() + 1; // getMonth()는 0부터 시작합니다.
  const 일 = 오늘.getDate();
  return `${년}/${월 < 10 ? `0${월}` : 월}/${일 < 10 ? `0${일}` : 일}`;
};

function App() {
  const [글목록, 글목록변경] = useState([
    { 제목: '冬の過ごし方', 따봉: 0 ,날짜:오늘날짜()},
    { 제목: '2024計画', 따봉: 0 ,날짜:오늘날짜()},
    { 제목: 'python自習記録', 따봉: 0 ,날짜:오늘날짜()}
  ]);
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [입력값, 입력값변경] = useState('');

  const 따봉증가 = (index) => {
    const 복사 = [...글목록];
    복사[index].따봉 += 1;
    글목록변경(복사);
  };
  return (
    <div className="App">
      <div className="black-nav">
        <h4>Reactblog</h4>
      </div>

      <div className="list">
        {글목록.map((글, index) => (
          <div key={index}>
            <h4 onClick={()=>{setModal(true);setTitle(index);}}>{글.제목} <span onClick={() => 따봉증가(index)}>👍</span>{글.따봉}</h4>
            <p>{글.날짜}</p>
            <button onClick={() => {
              const 복사 = [...글목록];
              복사.splice(index, 1);
              글목록변경(복사);
            }}>削除</button>
          </div>
        ))}
      </div>

      <input onChange={(e) => { 입력값변경(e.target.value); }} />
      <button onClick={() => {
        const 복사 = [...글목록];
        복사.push({ 제목: 입력값, 따봉: 0,날짜:오늘날짜() });
        글목록변경(복사);
      }}>発行</button>

      {modal ? <Modal title={title} 글목록변경={글목록변경} color={'gray'} 글목록={글목록} /> : null}
    </div>
  );
}　

function Modal(props) {
  return (
    <div className='Modal' style={{ background: props.color }}>
      <h4>{props.글목록[props.title].제목}</h4>
      <p>{오늘날짜()}</p>
      <p>内容</p>
      <button onClick={() => {
        const 복사 = [...props.글목록];
        복사[props.title].제목 = '';
        props.글목록변경(복사);
      }}>修正</button>
    </div>
  );
}

export default App;
