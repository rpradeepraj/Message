import { Form, Input , Divider,Button,Row,Card,Select} from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";


//import './App.css';
import React, { useState } from "react";

const { TextArea } = Input;
function Message() {

    const onFinish = values => {
       
          console.log('Received values of form: ', values);
        
      };

    return (
        <div>
        {/* <Row> */}
          <Card style={{backgroundColor:"#655858"}}>
          <Form className="login-form" onFinish={onFinish} style={{margin:"20px"}}>
          <h2 style={{color:"white"}}>Message page</h2><br></br>
          <Form.Item name="standard" rules={[{ required: true }]}>
            <Select placeholder="Please Select standard" >
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
                <Select.Option value="4">4</Select.Option>
                <Select.Option value="5">5</Select.Option>
                <Select.Option value="6">6</Select.Option>
                <Select.Option value="7">7</Select.Option>
                <Select.Option value="8">8</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="section" rules={[{ required: true }]}>
            <Select placeholder="Please Select section" >
                <Select.Option value="A">A</Select.Option>
                <Select.Option value="B">B</Select.Option>
                <Select.Option value="C">C</Select.Option>
                <Select.Option value="D">D</Select.Option> 
            </Select>
          </Form.Item>
          <Form.Item name="Message" rules={[{ required: true }]}>
            <TextArea size="large" rows={4} placeholder="Enter Message" />
          </Form.Item>
          <Form.Item>   
            <Button  size="large" type="primary" htmlType="submit" className="login-form-button">
              Submit
            </Button>
          </Form.Item>
        </Form>
          </Card>
        {/* </Row> */}
      </div>  
    )
}


export default Message;
