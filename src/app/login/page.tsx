import '@/styles/login.css'

export default function Login() {

	return (
		<div className="login-box">
			<h2>Login</h2>
			<form>
				<div className="user-box">
					<input type="text" name="" />
					<label>Username</label>
				</div>
				<div className="user-box">
					<input type="password" name="" />
					<label>Password</label>
				</div>
				<a href="#">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Submit
				</a>
			</form>
		</div>
	)

}