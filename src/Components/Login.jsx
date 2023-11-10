import '../styles/Login.css';
import '../styles/Media.css'

function Login({ active, closeForm }) {
  return(
    <div className={`login-form ${active ? 'active' : ''}`}>
        <form>
        <div id="close" className="fa-solid fa-circle-xmark" onClick={closeForm}></div>
          <h2>Вітаємо!</h2>
          <div className="frm">
            <i className="fa-regular fa-face-meh"></i>
            <input type="text" className='box' placeholder='login...' />
          </div>
          <div className="frm">
          <i className="fa-solid fa-square-phone"></i>
            <input type="text" className='box' placeholder='phone...' />
          </div>
          <div className="frm">
            <i className="fa-solid fa-at"></i>
            <input type="text" className='box' placeholder='email...' />
          </div>
          <div className="frm">
            <i className="fa-solid fa-key"></i>
            <input type="text" className='box' placeholder='password...' />
          </div>
          <div className="frm-reg">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Запам'ятати мене</label>
            <a href="!#">Забули пароль?</a>
          </div>
          <input type="submit" value="Вхід" className="link-btn" />
        </form>
    </div>
  );
}

export default Login;