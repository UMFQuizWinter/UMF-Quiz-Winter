import './ComingSoon.css';
import Header from '../header/Header'

function ComingSoon() {
    return (
        <div className='main-page'>
            <Header subject={'Coming soon'} />
            <div className='page'>
                <div className='coming'>
                    Coming soon!
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
