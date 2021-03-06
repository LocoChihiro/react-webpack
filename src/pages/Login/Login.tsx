import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";

import { FormComponentProps } from "antd/lib/form/Form";

class LoginForm extends React.Component<FormComponentProps> {
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row>
        <Col span={6} offset={9}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Row>
                <Col span={12} offset={6}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    block
                  >
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

const Login = Form.create({ name: "normal_login" })(LoginForm);

export default Login;
