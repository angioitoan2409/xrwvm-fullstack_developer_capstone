import React, { useState } from 'react';

const Register = () => {
    return (
        <div className="register-container">
            <h2>Sign-up</h2>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="Username" required />
                </div>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder="First Name" required />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder="Last Name" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
