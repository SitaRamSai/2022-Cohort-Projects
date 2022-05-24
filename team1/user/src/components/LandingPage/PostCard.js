import React from "react";
import { 
    Card, 
    Wrap,
    UserDiv, 
    UserImg, 
    UserName,
    PostInfo,
    PostTitle, 
    PostSubTitle,
    PostImage,
    Container,
    DateCreated, 
    ReadLength
} from "./PostCardStyled";

const PostCard = (props) => {
    const {
        userImg,
        userName,
        title,
        subtitle,
        postImg,
        dateCreated,
        readLength
    } = props;
    return(
        <Card>
            <Wrap>
                <UserDiv>
                    <UserImg src = { userImg } alt = 'userImg'/>
                    <UserName>{ userName }</UserName>
                </UserDiv>
                <PostInfo>
                    <PostTitle>{ title }</PostTitle>
                    <PostSubTitle> {subtitle} </PostSubTitle>
                    <Container>
                        <DateCreated> {dateCreated} </DateCreated>
                        <ReadLength> {readLength} </ReadLength>
                    </Container>
                </PostInfo>
            </Wrap>
            <PostImage src = { postImg } alt = 'postImg'/>
        </Card>
    )
}

export default PostCard;