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
                    justifyContent: 'center',
                    alignItems: 'center' }}>
                <div
                    style={{
                        width: 350,
                        height:480,
                        background: '#c47c7c',
                        flexDirection: 'column',
                        borderRadius: 4,
                        display: 'flex' ,
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    }}>
                    <Typography
                        style={{
                            color:'#000000',
                            fontSize:40 ,
                            fontWeight:"bolder",
                            textAlign: 'center',
                            marginTop: 20,
                            marginBottom: 5,
                            fontFamily: 'monospace',
                        }}>
                        Log in
                    </Typography>
                    <Divider style={{width: '100%', borderColor: '#ffffff', marginBottom: 20}}/>
                    <Input
                        placeholder = "Username"
                        onChange={(e) => setUsername(e.target.value)}
                    style={{
                        width:300,
                        height: 50,
                        marginTop:10,
                        backgroundColor: 'rgba(154,102,102,0.94)',
                    }}/>
                    <Input
                        placeholder = "Password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width:300,
                            height: 50,
                            marginTop:20,
                            backgroundColor: 'rgba(154,102,102,0.94)',
                        }}/>
                    <Button onClick={handleLogin}
                            style={{
                                width:'70%' ,
                                height:'10%' ,
                                marginTop:20 ,
                                borderRadius:4 ,
                                border:'none' ,
                                backgroundColor:'#4f3636',
                                color:'#fff',
                                fontFamily:'monospace'
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
                            borderColor: 'rgb(255,255,255)',
                            marginTop: 20 ,
                        }}/>
                    <Button
                        style={{
                            width: '50%',
                            height:'10%',
                            marginBottom: 20,
                            borderRadius: 4,
                            border: 'none',
                            backgroundColor: '#835f3a',
                            color: '#fff',
                            fontFamily: 'monospace',

                    }}>
                        Create an account
                    </Button>
                </div>
            </Content>
        </Layout>
    );
}
export default Login;