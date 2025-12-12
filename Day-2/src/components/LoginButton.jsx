function LoginButton(props) {
    const isLoggedIn = props.isLoggedIn;

    return (
        <>
        <button onClick={props.onClick}>
            {props.isLoggedIn ? 'Logout' : 'Login'}
        </button>
        </>
    );
}

export default LoginButton