import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
};

const Register = () => {
    const [
        values,
        setValues
    ] = useState(initialState);
    const handleChange = (e) => {
        console.log(e.target);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>Login</h3>
                {/* name input for the form */}
                <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />

                {/* email input for the form  */}
                <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />

                {/* password for the form  */}
                <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
                <button type='sumbit' className='btn btn-block'>
                    Submit
                </button>
            </form>
        </Wrapper>
    );
};
export default Register;
