import React from 'react';
import {Container, Image} from "react-bootstrap";
import ProgressBar from 'react-bootstrap/ProgressBar';
import A1 from '../assets/A1.jpg'

import '../compstyles/SCompanyItem.css'





const CfpItem = ({cfp}) => {
    console.log('fdsfdsfsd',cfp)

    let c1=0
    let c2=0
    let c3=0
    let c4=0
    if (cfp.score<60){
        c1=cfp.score
    } else{
        c1=60
    }
    if (cfp.score-60>0 && cfp.score<=80){
        c2=cfp.score-60
    }
    if (cfp.score-80>0){
        c2=20
        c3=cfp.score-80
    }
    //if (cfp.score>60){c1=60}
    c4=c1+c2+c3

    return (
        <div className="SItem">
            <div className="SItem_layout">
                <div className='p-4'>
                    <h2 className="d-flex justify-content-start">
                        {cfp.name}
                    </h2>
                    <Image style={{width:'100px'}} src={A1}></Image>
                </div>
                <div className="p-2 mt-5">
                    <Container>
                        <ProgressBar>
                            <ProgressBar variant="danger" now={c1} key={1} />
                            <ProgressBar variant="warning" now={c2} key={2} />
                            <ProgressBar variant="success" now={c3} key={3} />
                        </ProgressBar>
                        <div>
                            Баллы: {c4}
                        </div>
                        <h1>
                            это je patron
                        </h1>
                    </Container>

                </div>
            </div>
        </div>
    );
};

export default CfpItem;