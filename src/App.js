import './App.css';
import DeliveryPage from './pages/DeliveryTab';
// import {useDispatch} from 'react-redux'
// import { login } from './store/user';

function App() {

  // const dispatch = useDispatch()

  // useEffect = (() => {
  //   dispatch(login())
  //   console.log('login', login)
  // })
  // console.log('login', login)
  return (
    <div className="App">
      {/* <h1 onClick={()=> dispatch(login({username: 'Thamu', password: '1234'}))}>Hello</h1> */}
      <DeliveryPage />
    </div>
  );
}

export default App;
