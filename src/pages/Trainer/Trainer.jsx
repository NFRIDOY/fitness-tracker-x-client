
import { Link } from 'react-router-dom';
import BeATrainer from '../../components/BeATrainer/BeATrainer';
import PrivateRoute from '../../routers/PrivateRoute';
import Header1 from './../../components/Headers/Header1';

export default function Trainer() {
    return (
        <div>
            <Header1>
                Trainers
            </Header1>
            {/* All Trainers */}
            <section>

            </section>
            {/* be a Trainer */}
            <section>
                <Link to={"/BeATrainer"} className='btn btn-success text-white'>
                    Be A Trainer
                </Link>
                {/* <PrivateRoute>
                    <BeATrainer></BeATrainer>
                </PrivateRoute> */}
            </section>
        </div>
    )
}
