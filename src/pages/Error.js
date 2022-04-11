import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img} alt='Not found' />
                <h3>page not found</h3>
                <p>It seems the pages you are looking does not exist</p>
                <Link to='/'>Back Home</Link>
            </div>
        </Wrapper>
    );
};

export default Error;
