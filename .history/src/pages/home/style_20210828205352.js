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
    width:240px;
    float:right;
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
`
export const TopicItem = styled.div`
float:left;
background:#f7f7f7f;
height:32px;
line-height:32px;
padding-right:10px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
}
`