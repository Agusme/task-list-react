import React from 'react';
import Status from './Status';

const Heading = ( props ) => {
  /*   const {classroom, enable}= props;
    console.log(classroom,  enable) */
    return (
        <div>
            <h1 className='display-4 text-center'> Tasks List {props.classroom}</h1>
{/*<Status classroom ={props.classroom}  enable={props.enable} />*/ } 
 {/* otra manera es preguntar si propenables es true mostrame, si es falso no pasa para al otro lado */}
    {props.enable &&  <Status classroom={props.classroom} />}      
 
   <hr />
        </div>
    );
};

export default Heading;