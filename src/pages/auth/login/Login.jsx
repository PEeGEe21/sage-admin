import './login.css'
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../../../redux/apiCalls'
import { Spinner } from 'react-bootstrap';


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const {isFetching, error } = useSelector((state) => state.user);

    // console.log(username, password)
    const onSubmit = (e) => {
        e.preventDefault();
    
        login(dispatch, {username, password})
    }    
    const user = useSelector((state) => state.user.currentUser);
    console.log(user)



    return (
        <>
            <div className="loginWrapper">
                {/* <label htmlFor="username">Username</label> */}
                <input type="text" className="loginUsernameInput" id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>


                {/* <label htmlFor="password">Password</label> */}
                <input type="password" className="loginUPasswordInput" id="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                <button className="btn btn-primary btn-md" onClick={onSubmit}>Login
                {isFetching && (
                              <span className="ml-3 spinner">
                                <Spinner
                                  animation="border"
                                  variant="dark"
                                  size="sm"
                                  role="status"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                </button>
              
            </div>  
        </>
    )
}

export default Login


