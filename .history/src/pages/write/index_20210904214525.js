import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
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


export default connect(mapState, null)(Write);