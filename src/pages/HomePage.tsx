import Chip from '../components/Chip/Chip';
import TabBox from '../components/TabBox/TabBox';

const HomePage = () => {
    return (
        <>
            <TabBox>
                <li>
                    <Chip text='Chip' />
                </li>
                <li>
                    <Chip text='Chip' />
                </li>
                <li>
                    <Chip text='Chip' />
                </li>
                <li>
                    <Chip text='Chip' />
                </li>
            </TabBox>
        </>
    );
};

export default HomePage;
