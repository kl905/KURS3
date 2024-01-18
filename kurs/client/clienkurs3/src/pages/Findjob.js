import React from 'react';
import {Button, Card, Container, Form, Image, Row} from "react-bootstrap";
import {useState} from "react";
import '../compstyles/FindJobStyles.css'
import CfpItem from "../components/CfpItem";
import CfpList from "../components/CfpList";
import {NavLink, Outlet} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import A1 from "../assets/A1.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";
import {Slider,RangeSlider} from "rsuite";






let Al=[{id:1,clas:'A-1',name:'test1',score:50},{id:2,clas:'A-1',name:'test12',score:50},{id:3,clas:'A-2',name:'test2',score:75},{id:4,clas:'A-2',name:'test22',score:80},{id:5,clas:'A-3',name:'test3',score:90},{id:6,clas:'A-3',name:'test32',score:100}];
const Findjob = () => {
    const [count, setCount]=useState(0)
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
        /*
        <Form>
            <div className='p-2'>
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

         */
        /*
        <Container className="d-flex justify-content-center align-items-center"
                   style = {{height:window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Регистрация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."

                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button variant="outline-dark" className="mb-2 ml-2">
                            Регистрация
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
         */
        /*
        <Container className="d-flex justify-content-center align-items-center"
                   style = {{height:window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Регистрация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ф.И.О. родителя..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите login родителя..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ф.И.О. ученика..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите login ученика..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль ..."
                        type="password"
                    />
                    <div className='mt-3'>
                        <select>
                            <option value="A-1">A-1</option>
                            <option value="A-2">A-2</option>
                            <option value="A-3">A-3</option>
                        </select>
                    </div>
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Button variant="outline-dark" className="mb-2 ml-2">
                            Ещё один выживший из ума
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
         */
    /*
    <div>
        <div className="SItem">
            <div className="SItem_layout">
                <div className='p-4'>
                    <h2 className="d-flex justify-content-start">
                        Чел
                    </h2>
                    <Image style={{width:'100px'}} src={A1}></Image>
                </div>
                <div className="p-2 mt-5">
                    <Container>
                        <Button className='p-2 mt-5 m-lg-1' onClick={()=>{if (count -5>=0) {setCount(count - 5)}}}>-5</Button>
                        <Button className='p-2 mt-5 m-lg-1' onClick={()=>{if (count -1>=0) {setCount(count - 1)}}}>-1</Button>
                        <Button className='p-2 mt-5 m-lg-1' onClick={()=>{if (count +1<=30) {setCount(count + 1)}}}>+1</Button>
                        <Button className='p-2 mt-5 m-lg-1' onClick={()=>{if (count +5<=30) {setCount(count + 5)}}}>+5</Button>
                        <ProgressBar>
                            <ProgressBar variant="success" now={count} max={30} min={0}/>
                        </ProgressBar>
                        <div>
                            Баллы: {count}
                        </div>

                    </Container>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
            <Button >
                Закончить урок
            </Button>
        </div>
    </div>
     */
        //base
     <div>
         <div className="SItem">
             <div className="SItem_layout">
                 <div>
                     <h1 className="d-flex justify-content-center">
                         Чел
                     </h1>
                 </div>
                 <div>
                     <ProgressBar className="mt-1" variant="success" now={50} />
                     <div className="d-flex justify-content-center align-items-center">
                         =>
                     </div>
                     <ProgressBar className="mt-1" variant="warning" now={60} />

                 </div>
             </div>
         </div>
     </div>
    );


};

export default Findjob;