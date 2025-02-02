import Hero from "./components/Hero"
import Login from "./components/Login"

function LoginPage(){
    return (
        <div>
            <div className="flex">
                <Hero/>
                <Login/>
            </div>
        </div>
    )
}

export default LoginPage