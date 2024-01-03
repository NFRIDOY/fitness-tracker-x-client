import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import PrivateRoute from '../../routers/PrivateRoute';
import Forum from '../../pages/Forum/Forum';
import AddClasses from '../AddClasses/AddClasses';


export default function TrainersTab() {
    return (
        <div>
            <Tabs>
                <div className='w-fit mx-auto'>
                    <TabList>
                        <Tab>Manage Slots</Tab>
                        <Tab>Manage member</Tab>
                        <Tab>Add Forum</Tab>
                        <Tab>Add Class</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <PrivateRoute><Forum></Forum></PrivateRoute>
                </TabPanel>
                <TabPanel>
                    <PrivateRoute><AddClasses></AddClasses></PrivateRoute>
                </TabPanel>
            </Tabs>
        </div>
    )
}
