import * as React from 'react'
import Header from '../Header/Header'

export default function SignupForm(props) {
    return (
        <div>
            <Header />
            <form onSubmit={props.onSubmit}>
                <h4>Create your account</h4>
                <label>
                    Email:
                <input type="email" required name="email" onChange={props.onChange} value={props.values.email} />
                </label>

                <label>
                    Password:
                <input type="password" required name="password" minLength="6" onChange={props.onChange} value={props.values.password} />
                </label>

                <button type="submit">Create</button>

                {props.user.url && props.user.url.includes('signup') &&
                    <p>{props.user.message}</p>}

                {props.user.id && <p>User created successfully!</p>}
            </form>
        </div>)
}