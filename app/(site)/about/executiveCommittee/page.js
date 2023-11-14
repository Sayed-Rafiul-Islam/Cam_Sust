import './module.executiveCommittee.css'
import { getCommittees } from '@/sanity/sanity-utils';
import Committees from '@/components/Committees';

const executiveCommittee = async () => {
    const committees = await getCommittees()


    return (
        <div className='executiveCommittee animate__animated animate__fadeInLeft'>  
            <Committees
            committees={committees}
            />

            
        </div>
    );
};

export default executiveCommittee;