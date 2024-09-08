import InputField from "./components/InputField"
import SocialLogin from "./components/SocialLogin"

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Continue With</h2>
      <SocialLogin />
      <p className="separator"><span>or</span></p>

      <form action="#" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail" />
        <InputField type="password" placeholder="Password" icon="lock" />

        <a href="Password_reset" className="forgot-pass-link">Forgot Password?</a>

        <button className="login-button">Log In</button>
      </form>

      <p className="signup-text">Don&apos;t have an account? <a href="Sign_Up">Signup now</a> </p>
    </div>
  )
}

export default App