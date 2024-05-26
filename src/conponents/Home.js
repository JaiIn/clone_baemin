import SildShow from './HomeCom/SildShow';
import Downbtn from './HomeCom/Downbtn';
import SildProducts from './HomeCom/SildProducts';
import IconCon from './HomeCom/IconCon';
import Intro from './HomeCom/Intro';
import Company from './HomeCom/Company';

function Home() {
    return (
        <div>
            <IconCon/>
            <SildShow/>
            <Downbtn/>
            <SildProducts/>
            <Intro/>
            <Downbtn/>
            <Company/>
        </div>
    );
}

export default Home;
