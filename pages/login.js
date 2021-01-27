import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../state/actions/auth/auth";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import SpinnerFull from "../components/Spinner/SpinnerFull";
import { Input, Form, Button } from "antd";
import { useRouter } from "next/router";

export const Login = (props) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = (e) => {
    props.login(e.email, e.password);
  };

  useEffect(() => {
    form.setFieldsValue({
      email: "janedoe@gmail.com",
      password: "janedoe",
    });
    // eslint-disable-next-line
  }, []);

  if (props.isAuthenticated) {
    router.push("/");
    return <SpinnerFull info="Redirecting..." />;
  } else if (props.isLoading) {
    return <SpinnerFull info=" Authenticating Credentials..." />;
  } else
    return (
      <div
        className="d-flex align-items-center justify-content-center container"
        style={{ height: "100%" }}
      >
        <div className=" card card-body shadow rounded    ">
          <h4>Kindly login</h4>
          <div>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              {/* Username */}

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your  email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="text"
                  placeholder=" Email"
                  name="username"
                />
              </Form.Item>

              {/* Password */}

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
                  type="text"
                  placeholder=" Password"
                  name="password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  isLoading: state.authReducer.isLoading,
});

export default connect(mapStateToProps, { login })(Login);
