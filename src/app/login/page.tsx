'use client';
import {useState} from "react";
import {Divider, Input, Layout, Typography , Button} from "antd";
import {Content} from "antd/es/layout/layout";

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('trying to login :', username , password);
    };
    return (
        <Layout style={{minHeight:'100vh'}}>
            <Content
                style={{
                    display: 'flex',
                    paddingRight:160,
                    justifyContent: 'right',
                    alignItems: 'center',
                    backgroundColor: '#FAEDCE',
                    overflow: 'hidden',
                    flexDirection: 'row'
                }}>
                <div
                    style={{
                        justifyContent:'center',
                        alignItems:'flex-start',
                        display:'flex',
                        paddingRight:400,
                        paddingBottom: 350,
                        flexDirection: 'column',
                        flexWrap : 'nowrap',
                        maxWidth: '1200px'
                    }}
                >
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
                        Discover and Share Recipes
                    </Typography>
                </div>
                <div
                    style={{
                        width: 350,
                        height:480,
                        background: '#F6F1E9',
                        flexDirection: 'column',
                        borderRadius: 15,
                        display: 'flex' ,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        boxShadow: '0 0 12px rgba(0,0,0,0.5)',
                    }}>
                    <Typography
                        style={{
                            color:'#4F200D',
                            fontSize:40 ,
                            fontWeight:"bolder",
                            textAlign: 'center',
                            marginTop: 20,
                            marginBottom: 5,
                            fontFamily: 'monospace',
                        }}>
                        Log in
                    </Typography>
                    <Divider style={{width: '100%', borderColor: '#4F200D', marginBottom: 20}}/>
                    <Input
                        placeholder = "Username"
                        onChange={(e) => setUsername(e.target.value)}
                        style={{
                            width:300,
                            height: 50,
                            marginTop:10,
                            backgroundColor: '#F6F1E9',
                            borderRadius: 5,
                            border: '1px solid #4F200D',
                        }}/>
                    <Input
                        placeholder = "Password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width:300,
                            height: 50,
                            marginTop:20,
                            backgroundColor: '#F6F1E9',
                            borderRadius: 5,
                            border: '1px solid #4F200D',
                        }}/>
                    <Button
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f89225'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FF8400'}
                            onClick={handleLogin}
                            style={{
                                width:'70%' ,
                                height:'10%' ,
                                marginTop:20 ,
                                borderRadius:4 ,
                                border:'none' ,
                                backgroundColor:'#FF8400',
                                color:'#4F200D',
                                fontFamily:'monospace',
                                fontSize:20
                    }}>
                        Log in
                    </Button>
                    <div style={{
                        color: '#4f3636',
                        fontSize: 14,
                        marginTop: 15,
                        cursor: 'pointer',
                        fontFamily:'monospace'
                    }}>
                        Forgot password?
                    </div>
                    <Divider
                        style={{
                            width: '100%',
                            borderColor: '#4F200D',
                            marginTop: 20 ,
                        }}/>
                    <Button
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFD93D'}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5cb45'}
                        style={{
                            width: '50%',
                            height:'10%',
                            marginBottom: 20,
                            borderRadius: 4,
                            border: 'none',
                            backgroundColor: '#FFD93D',
                            color: '#4F200D',
                            fontFamily: 'monospace',
                            fontSize: 15,
                            fontWeight: 'bold'
                    }}>
                        Create an account
                    </Button>
                </div>
            </Content>
        </Layout>
    );
}
export default Login;