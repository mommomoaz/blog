import logo from'./logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [글목록, 글목록변경] = useState([
    { 제목: '冬の過ごし方', 따봉: 0 },
    { 제목: '2024計画', 따봉: 0 },
    { 제목: 'python自習記録', 따봉: 0 }
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
            <h4>{글.제목} <span onClick={() => 따봉증가(index)}>👍</span>{글.따봉}</h4>
            <p>2023/12/31</p>
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
        복사.push({ 제목: 입력값, 따봉: 0 });
        글목록변경(복사);
      }}>글발행</button>

      {modal ? <Modal title={title} 글목록변경={글목록변경} color={'skyblue'} 글목록={글목록} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className='Modal' style={{ background: props.color }}>
      <h4>{props.글목록[props.title].제목}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        const 복사 = [...props.글목록];
        복사[props.title].제목 = '여자 코트 추천';
        props.글목록변경(복사);
      }}>글수정</button>
    </div>
  );
}

export default App;
