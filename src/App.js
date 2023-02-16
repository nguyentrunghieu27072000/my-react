import './App.css';
import { Component } from 'react';
import LoginForm from './components/LoginForm';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './components/Home';
import { ACCESS_TOKEN } from './constants/constant'
class App extends Component {

  onUserNavigate() {
    console.log('ok', localStorage.getItem(ACCESS_TOKEN))
    if(!localStorage.getItem(ACCESS_TOKEN)) {
      // window.location.pathname = "/signin";
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' onEnter={this.onUserNavigate()} onChange={this.onUserNavigate()} element={< Home />}></Route>
            <Route exact path='/login' element={< LoginForm />}></Route>
        </Routes>
      </BrowserRouter>
   );
  }
}

// function App() {
//   // login with fb
//   const [login, setLogin] = useState(false);
//   const [data, setData] = useState({});
//   const [picture, setPicture] = useState('');
  
//   const responseFacebook = (response) => {
//     console.log(response);
//     setData(response);
//     setPicture(response.picture.data.url);
//     if (response.accessToken) {
//       setLogin(true);
//     } else {
//       setLogin(false);
//     }
//   }

//   //login
//   const Login = async (details) => {
//     const data = details;
//     const response = await loginAccount(data);
//     localStorage.setItem(ACCESS_TOKEN, response.data['access_token']);
//     console.log(response);
//   }

//   return (
//   <>
//     <div className="login">
//       <LoginForm Login={Login}></LoginForm>
//     </div>

//     <div class="container">
//       <Card style={{ width: '600px' }}>
//         <Card.Header>
//           {!login &&
//             <FacebookLogin
//               appId="720959082717599"
//               autoLoad={true}
//               fields="name,email,picture"
//               scope="public_profile,user_friends"
//               callback={responseFacebook}
//               icon="fa-facebook" />
//           }
//           {login &&
//             <Image src={picture} roundedCircle />
//           }
//         </Card.Header>
//         {login &&
//           <Card.Body>
//             <Card.Title>{data.name}</Card.Title>
//             <Card.Text>
//               {data.email}
//             </Card.Text>
//           </Card.Body>
//         }
//       </Card>
//     </div>
//   </>
//   );
// }

export default App;
