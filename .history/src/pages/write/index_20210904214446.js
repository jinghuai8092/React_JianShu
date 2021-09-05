import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='Account' ref={(input) => { this.account = input }}></Input>
                        <Input placeholder='Password' type='password' ref={(input) => { this.password = input }}></Input>
                        <Button onClick={() => { this.props.login(this.account, this.password) }}>Login</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else {
            return <Redirect to='/'></Redirect>
        }
    }

}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
        // console.log(accountElem,passwordElem)
    }
})
export default connect(mapState, mapDispatch)(Login);