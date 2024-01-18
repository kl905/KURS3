import React from 'react';
import {Row} from "react-bootstrap";
import CfpItem from "./CfpItem";



const CfpList = ((OFP) => {

    let Tfp=Object.values(OFP)
    console.log('OFP----------',OFP)
    console.log('Tfp----------',Tfp)
    return (
        <Row>
            {Tfp[0].map((cfp,i) => <CfpItem key={i} cfp={cfp} />)}
        </Row>
    );
});

export default CfpList;