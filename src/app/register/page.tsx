'use client';

import {Layout, Typography} from "antd";
import { Content } from "antd/es/layout/layout";
import RegisterForm from "@/app/register/RegisterForm";

const Register = () => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content
                style={{
                    display: 'flex',
                    paddingRight: 160,
                    justifyContent: 'right',
                    alignItems: 'center',
                    backgroundColor: '#FAEDCE',
                    overflow: 'hidden',
                    flexDirection: 'row'
                }}>
                <div
                    style={{
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        display: 'flex',
                        paddingRight: 400,
                        paddingBottom: 350,
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        maxWidth: '1200px'
                    }}>
                    <Typography style={{
                        color: '#4F200D',
                        fontSize: 'clamp(60px, 5vw, 90px)',
                        fontWeight: 'bolder',
                        fontFamily: 'monospace',
                        paddingLeft: 20,
                        textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
                        whiteSpace: 'nowrap',
                    }}>
                        Tastebook
                    </Typography>
                    <Typography style={{
                        color: '#3C3D37',
                        fontSize: 'clamp(20px, 2.5vw, 30px)',
                        fontWeight: 'bolder',
                        fontFamily: 'monospace',
                        paddingLeft: 20,
                        whiteSpace: 'nowrap',
                    }}>
                        Join and Share Your Recipes
                    </Typography>
                </div>
                <RegisterForm/>
            </Content>
        </Layout>
    );
}
export default Register;
