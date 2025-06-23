import React, {useState} from "react";

export default function SignUp() {

    const [createStateSign, setCreateStateSign] = useState(
        {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    )
    return (
        <div className="flex items-center justify-center min-h-screen
        bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
            <form onSubmit={(e)=>{e.preventDefault(); console.log(createStateSign)}}
                  className="p-8 rounded shadow-md w-full max-w-sm space-y-4
                bg-[#00000050] text-text-75"
            >
                <h2 className="text-2xl font-semibold ">Sign Up</h2>
                <input type="text" placeholder="Email or Phone Number"
                       value={createStateSign.email}
                       onChange={(e)=>{setCreateStateSign({...createStateSign, email: e.target.value})}}
                       className= "w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input type="text" placeholder="Username"
                       value={createStateSign.username}
                       onChange={(e)=>{setCreateStateSign({...createStateSign, username: e.target.value})}}
                       className= "w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input type="text" placeholder="Pasword"
                       value={createStateSign.password}
                       onChange={(e)=>{setCreateStateSign({...createStateSign, password: e.target.value})}}
                       className= "w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input type="text" placeholder="Confirm Pasword"
                       value={createStateSign.confirmPassword}
                       onChange={(e)=>{setCreateStateSign({...createStateSign, confirmPassword: e.target.value})}}
                       className= "w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-primary-100 text-white py-2 rounded-md
                    hover:bg-primary-75 transition-colors"
                >
                    Sign In
                </button>

                <div className="flex items-center gap-2 justify-start">
                    <input type="checkbox" />
                    Remember me
                </div>
                <div className="flex items-center gap-2 justify-start text-[12px]">
                    <span>Do you already have an account?</span>
                    <span>Sign In now.</span>
                </div>

            </form>

        </div>
    )
}