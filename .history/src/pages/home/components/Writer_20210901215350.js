import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    WriterItem,
    WriterWrapper
} from '../style';

class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <div className='title'>
                    <h2 className='WriterTitle'>Recommended Author</h2>
                    <span className='WriterChange' onClick={this.props.handChangePage}><i ref={(icon)=>{this.spinIcon=icon}} className='iconfont change'>&#xe606;</i>Change</span>
                </div>
                {this.props.list.map((item) => {
                    return (
                        <ul className='listUl'>
                            <WriterItem key={item.get('id')}>
                                <img className='imgAuthor' src={item.get('imgUrl')} alt='' />
                                <span className='follow'>Follow</span>
                                <span className='title'>{item.get('name')}</span>
                                <span className='info'>{item.get('info')}</span>
                            </WriterItem>
                        </ul>
                    )
                })}

            </WriterWrapper>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        handChangePage(){
            console.log('author change success!');
            let originAngle=change.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            if(originAngle<999){
                spin.style.transform='rotate('+(originAngle+360)+'deg)';
            }else{
                spin.style.transform='rotate(0deg)';
            }
        }
    }
}

export default connect(mapState,mapDispatchToProps)(Writer);