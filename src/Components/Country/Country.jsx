import { useState } from 'react';
import './Country.css';


const Country = ({ country }) => {
    const { name, flags, population, cca3, area } = country;

const [visited, setVisited] = useState(false);

const handleVisited = () => {
    setVisited(!visited);
}


    return (
        <div className={`country ${visited && 'visited'}`}>
            {/* যদি visited হয় তাহলে visited এর css এপলাই হবে। এই জন্য এভাবে লেখা হয়েছে আর সাথে country এর css ও এপলাই হবে
 */}
            <h3 style={{color: visited ? 'purple' : 'white'}}>{name.common}</h3>

            {/*visited hoile purple hobe na hoy white hobe  */}
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area :{area}</p>
            <p><small>Code : {cca3}</small></p>

            <button>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {/* এভাবে Visited কথাটা কেও পরিবর্তন করা যায় turnery operator use kore  */}

            {/* <button onClick={handleVisited}>Visited</button> */}
            {visited && 'I have visited'};
            {visited ? 'I have visited' : 'I want to visit'}
            {/* *Turniry Operator 
            *
             এভাবেও টারনারি অপারেটর দিয়ে লেখা যায় , যদি visited হয় তাহলে প্রথম অংশ না হয় পরের অংশ দেখাবে */}


        </div>
    );
};

export default Country;