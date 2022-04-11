import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/wrappers/RegisterPage';
import Alert from '../components/Alert';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    ShowAlert: false
};

const Register = () => {
    const [
        values,
        setValues
    ] = useState(initialState);
    const handleChange = (e) => {
        console.log(e.target);
    };

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                {values.ShowAlert && <Alert />}
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {/* name input for the form */}
                {!values.isMember && (
                    <FormRow type='text' name='name' value={values.name} handleChange={handleChange} />
                )}

                {/* email input for the form  */}
                <FormRow type='email' name='email' value={values.email} handleChange={handleChange} />

                {/* password for the form  */}
                <FormRow type='password' name='password' value={values.password} handleChange={handleChange} />
                <button type='sumbit' className='btn btn-block'>
                    Submit
                </button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type='button' onClick={toggleMember} className='member-btn'>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    );
};
export default Register;
