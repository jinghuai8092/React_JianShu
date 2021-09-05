import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';
import {actionCreators} from './store'

class Login extends PureComponent {
    render() {
        const {login}=this.props;
        if(!login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='Account' ref={(input) => { this.account = input }}></Input>
                        <Input placeholder='Password' type='password' ref={(input) => { this.password = input }}></Input>
                        <Button onClick={()=>{this.props.login(this.account,this.password)}}>Login</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else{
            
        }
    }

}

const mapState=(state)=>({
    login:state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem) {
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
        // console.log(accountElem,passwordElem)
    }
})
export default connect(mapState, mapDispatch)(Login);