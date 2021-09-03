import styled from "styled-components";

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft = styled.div`
    margin-left:15px;
    margin-top:30px;
    float:left;
    width:625px;
    .banner-img{
        width:625px;
        height:270px
    }
`;

export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
float:left;
background:#f7f7f7f;
height:32px;
line-height:32px;
margin-left:18px;
margin-bottom:18px;

padding-right:10px;
color:#000;
font-size:14px;
border:1px solid #dcdcdc;
border-radius:4px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
}
`

export const ListItem = styled.div`
overflow:hidden;
padding:20px 0;
border-bottom: 1px solid #dcdcdc;
.pic{
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;

}
`
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
    }
`

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`
export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:cover;
`

export const WriterItem = styled.div`
width:278px;
height:20px;
background:#eee;
.imgAuthor{
    width:100%;
    height:100%;
    
}
`
export const WriterWrapper = styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
overflow:hidden;

.WriterTitle{
    float:left;
    font-size:14px;
    color:#969696;
    margin:10px 0}
.WriterChange{
    float:right;
    font-size:14px;
    color:#787878;
    text-align:left;
    cursor: pointer;
    margin:8px 0;
    .change{
        font-size:12px;
    }
}
`

