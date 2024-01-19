import FollowerList from './FollowerList';
import Form from './Form';
import FollowerContext from './context/FollowerContext'


function App() {
  return (
    <div className="App">
      <FollowerContext>
        <>
          <Form/>
          <FollowerList/>
        </>
      </FollowerContext>
    </div>
  );
}

export default App;
