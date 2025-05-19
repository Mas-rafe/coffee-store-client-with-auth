import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';


const SignUp = () => {
    const { createUser } = use(AuthContext);
    console.log(createUser);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());
        console.log(email, password, userProfile);



        //create user in the firabase
        createUser(email, password)
            .then(res => {
                console.log(res.user);

                //save profile info in the db
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (

        <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                <form onSubmit={handleSignUp} className="form">

                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Enter your name" />

                    <label className="label">Address</label>
                    <input type="text" className="input" name='address' placeholder="need address" />

                    <label className="label">Photo</label>
                    <input type="text" className="input" name='photo' placeholder="Photo Url" />

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>

    );
};

export default SignUp;