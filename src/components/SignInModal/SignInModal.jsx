import './style.css';
import { useDispatch } from 'react-redux';
import { loginSlice } from '../../pages/signInUp/loginSlice';

import axios from 'axios';
import useSignInModal from './useSignInModal';

const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const SignInModal = () => {
  const {
    handleOnSignUp,
    handleOnSubmit,
    handleOnChange,
    signUp,
    isRemember,
    setSignUp,
    error,
    setEmail,
    setPassword,
    setFirstName,
    setLastName,
    isCreated,
  } = useSignInModal();
  document.title = 'Argent Bank - Sign In';

  const dispatch = useDispatch();

  return (
    <main className="main bg-dark">
      {/* {error && <div variant="danger">{error}</div>} */}
      {!signUp ? (
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleOnSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                required
                onChange={handleOnChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                // value={password}
                required
                onChange={handleOnChange}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                defaultChecked={isRemember}
                onChange={() =>
                  dispatch(loginSlice.actions.logRemember(!isRemember))
                }
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div>
              <button className="sign-in-button" type="submit">
                Sign In
              </button>
              <button
                className="sign-up-button"
                type="button"
                onClick={() => {
                  setSignUp(true);
                }}
              >
                Sign up
              </button>
            </div>

            {error !== null ? <div className="error">{error}</div> : ''}
          </form>
        </section>
      ) : (
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign Up</h1>
          <form onSubmit={handleOnSignUp}>
            {isCreated ? (
              <div className="alert alert-success" role="alert">
                Profile Created Successfully !
              </div>
            ) : (
              ''
            )}
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                // value={password}
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="firstName">Firstname</label>
              <input
                type="firstName"
                name="firstName"
                id="firstName"
                // value={password}
                required
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Lastname</label>
              <input
                type="lastName"
                name="lastName"
                id="lastName"
                // value={password}
                required
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>

            <div>
              <button className="create-account-button" type="submit">
                Create account
              </button>
              <button
                className="create-account-option"
                onClick={() => {
                  setSignUp(false);
                }}
              >
                Cancel
              </button>
            </div>

            {error !== null ? (
              <label className="error">{error.message}</label>
            ) : (
              ''
            )}
          </form>
        </section>
      )}
    </main>
  );
};

export default SignInModal;
