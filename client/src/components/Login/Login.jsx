import React from 'react';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import {
    Row, 
    Col, 
    Form, 
    Input, 
    Button, 
    Checkbox,
    Typography,
    Layout
} from 'antd'

function Login(props) {

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
    return (
        <>
            <Row gutter={[, 24]} 
                style={{height:'100vh', display:'flex', flexDirection:'row'}}
                justify='center'
                align='middle'
            >
                {/* <Layout.Header> */}
                    <Col span={24} style={{backgroundColor: "lightblue", padding:'10px', }}>
                        <Typography.Title type="success">
                            Login Now!!!
                        </Typography.Title>
                        <Typography.Text type='secondary'>
                            Best chat application in Viet Nam
                        </Typography.Text>
                    </Col>
                {/* </Layout.Header> */}
                {/* <Layout.Content> */}

                    <Col span={18} style={{flexGrow:1}} >
                        <Form
                            labelCol= {{span: 8}}
                            wrapperCol= {{span: 16}}
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input placeholder="Type your username" />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password placeholder="Type your password" />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>

                            <Form.Item > 
                                <Link to="/register">Register now?</Link>
                            </Form.Item>

                        </Form>
                    </Col>
                {/* </Layout.Content> */}
                {/* <Layout.Footer> */}
                    <Col span={24}>
                        <Typography.Text type="secondary" >
                            Developed by Le Anh Hao - Tran Bao Long - Nguyen Thuong Hai
                        </Typography.Text>
                    </Col>
                {/* </Layout.Footer> */}
            </Row>   
        </>
    );
}

export default Login;