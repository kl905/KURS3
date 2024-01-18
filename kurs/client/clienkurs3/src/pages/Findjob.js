import React from 'react';
import {Form, Row} from "react-bootstrap";
import {useState} from "react";
import '../compstyles/FindJobStyles.css'
import CfpItem from "../components/CfpItem";
import CfpList from "../components/CfpList";




let Al=[{id:1,clas:'A-1',name:'test1',score:50},{id:2,clas:'A-1',name:'test12',score:50},{id:3,clas:'A-2',name:'test2',score:75},{id:4,clas:'A-2',name:'test22',score:80},{id:5,clas:'A-3',name:'test3',score:90},{id:6,clas:'A-3',name:'test32',score:100}];
const Findjob = () => {
    const [Cl,setCl]=useState('A-1')
    let otr=[]
    console.log('----------------------------')
    for (let i = 0; i < Al.length; i++) {
        if (Cl === Al[i].clas) {
            otr.push(Al[i])
            console.log(otr)
        }
    }

    return (
        <Form>
            <div>
                <select value={Cl} onChange={e=>setCl(e.target.value)}>
                    <option value="A-1">A-1</option>
                    <option value="A-2">A-2</option>
                    <option value="A-3">A-3</option>
                </select>
            </div>
            <div>
                <CfpList OFP={otr}/>
            </div>
        </Form>


    );
};

export default Findjob;