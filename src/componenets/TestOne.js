import React, { useState } from "react";


// class ------------------------------------- 

class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''

        }
    }

    handleName = (e) => {
        this.setState({ name: e })

    }
    handleEmail = (e) => {
        this.setState({ email: e })

    }
    handlePassword = (e) => {
        this.setState({ password: e })

    }

    render() {
        return (
            <div className="center">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    console.log("form submit")
                    console.log(this.state)
                }}>
                    <div>
                        <input type="text" placeholder="name" onChange={(val) => {
                            this.handleName(val.target.value)
                        }} />
                        <label>Your Name: </label>
                    </div>
                    <div>
                        <input type="email" placeholder="your Email" onChange={(val) => {
                            this.handleEmail(val.target.value)
                        }} />
                        <label>Your Email: </label>
                    </div>
                    <div>
                        <input type="password" placeholder="your Password" onChange={(val) => {
                            this.handlePassword(val.target.value)
                        }} />
                        <label>Your Password: </label>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

// -----------------------------------------------------------------------------------------------------
// function

// function Welcome(props) {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')


//     const handleName = (e) => {
//         setName(e)

//     }
//     const handleEmail = (e) => {
//         setEmail(e)
//     }
//     const handlePassword = (e) => {
//         setPassword(e)
//     }

//     return (
//         <div className="center">
//             <form onSubmit={(e) => {
//                 e.preventDefault()
//                 console.log("form submit")
//                 console.log({ name, email, password })
//             }}>
//                 <div>
//                     <input type="text" placeholder="name" onChange={(val) => {
//                         handleName(val.target.value)
//                     }} />
//                     <label>Your Name: </label>
//                 </div>
//                 <div>
//                     <input type="email" placeholder="your Email" onChange={(val) => {
//                         handleEmail(val.target.value)
//                     }} />
//                     <label>Your Email: </label>
//                 </div>
//                 <div>
//                     <input type="password" placeholder="your Password" onChange={(val) => {
//                         handlePassword(val.target.value)
//                     }} />
//                     <label>Your Password: </label>
//                 </div>
//                 <button type="submit">submit</button>
//             </form>
//         </div>
//     )
// }


export default Welcome;