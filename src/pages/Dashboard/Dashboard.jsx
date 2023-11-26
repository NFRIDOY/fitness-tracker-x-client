
import { Outlet } from 'react-router-dom';
import Header1 from './../../components/Headers/Header1';
export default function Dashboard() {
    return (
        <div>
            <Header1>
                Dashboard
            </Header1>
            {
                <div>
                    <Outlet></Outlet>
                </div>
            }
        </div>
    )
}
