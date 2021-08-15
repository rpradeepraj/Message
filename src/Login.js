//ßimport logo from './logo.svg';
import { Form, Input , Divider,Button,Row,Card} from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

//import './App.css';
import React, { useState } from "react";

function Login(props) {

  const onFinish = values => {
    if(values.username == "admin" && values.password =="admin") {
      console.log('Received values of form: ', values);
      props.setLog(true);
     
    }
  };
  
  return (
    <div>
      <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
        <Card style={{backgroundColor:"#655858"}}>
        <Form className="login-form" onFinish={onFinish} style={{margin:"20px"}}>
        <h2 style={{color:"white"}}>Admin Login</h2><br></br>
        <Form.Item name="username" rules={[{ required: true }]}>
          <Input size="large" placeholder="Enter username" prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password size="large" placeholder="Enter password" prefix={<LockOutlined />}/>
        </Form.Item>
        <Form.Item>   
          <Button  size="large" type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
        </Form.Item>
      </Form>
        </Card>
      </Row>
    </div>  
  );
}

export default Login;
