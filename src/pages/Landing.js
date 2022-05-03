import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        Score <span>tracking</span> App
                    </h1>
                    <p>
                        A score tracking app designed for gamers by gamers with a focus on accuracy, ease of use, and a
                        modern look and feel.
                    </p>
                    <Link to='/register' className='btn btn-hero'>
                        Enter the Arena
                    </Link>
                </div>

                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    );
};

export default Landing;
