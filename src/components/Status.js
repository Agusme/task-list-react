import React from 'react';
import { Alert } from 'react-bootstrap';

const Status = ({classroom, enable}) => {
    return (
        <div>
          {/* enable ?   <Alert variant='info'>
                La comision {classroom} esta habilitada
            </Alert> : null */
            /* otra manera es */
            <Alert variant='info'>
            La comision {classroom} esta habilitada
        </Alert>
            }
        </div>
    );
};

export default Status;