import React from 'react';
import '../../styles/Home.css';
import img from '../../images/img.png';
import {
    SubBtn, 
    SubBtnLink, 
    HomeMain, 
    SubHeader, 
    SubHeaderTitle, 
    SubHeaderImage, 
    SubHeaderOutline,
    Trending, 
    TrendingImg,
    TrendingTitle,
    AllPosts, 
    PostListWrap, 
    Tags, 
    TagListWrap, 
    TagTitle
  } from './HomeStyled';
import TrendPost from './TrendPost';
import PostList from './PostList';
import TagList from './TagList';
import Nav from './Nav';

const Home = () => {

    const posts = [
        {'id': 1, 'user': {'id': "u1", 'userName': 'user1', 'userImg': 'img1'}, 'title': "Title 1",'subTitle': "This is subtitle1", 'body': " This is body for title 1", 'postImg': 'postImg2', 'dateCreated': 'date', 'readLength': 'readLength', 'category': 'c1'},
        {'id': 2, 'user': {'id': "u2", 'userName': 'user2', 'userImg': 'img2'}, 'title': "Title 2",'subTitle': "This is subtitle2", 'body': " This is body for title 2", 'postImg': 'postImg1', 'dateCreated': 'date', 'readLength': 'readLength','category': 'c2'},
        {'id': 3, 'user': {'id': "u3", 'userName': 'user3', 'userImg': 'img3'}, 'title': "Title 3",'subTitle': "This is subtitle3", 'body': " This is body for title 3", 'postImg': 'postImg3', 'dateCreated': 'date', 'readLength': 'readLength','category': 'c3'},
        {'id': 4, 'user': {'id': "u4", 'userName': 'user4', 'userImg': 'img4'}, 'title': "Title 4",'subTitle': "This is subtitle4", 'body': " This is body for title 4", 'postImg': 'postImg4', 'dateCreated': 'date', 'readLength': 'readLength','category': 'c4'},
        {'id': 5, 'user': {'id': "u5", 'userName': 'user5', 'userImg': 'img5'}, 'title': "Title 5",'subTitle': "This is subtitle5", 'body': " This is body for title 5", 'postImg': 'postImg5', 'dateCreated': 'date', 'readLength': 'readLength','category': 'c5'},
        {'id': 6, 'user': {'id': "u6", 'userName': 'user6', 'userImg': 'img6'}, 'title': "Title 6",'subTitle': "This is subtitle6", 'body': " This is body for title 6", 'postImg': 'postImg6', 'dateCreated': 'date', 'readLength': 'readLength','category': 'c6'},
        {'id': 7, 'user': {'id': "u7", 'userName': 'user7', 'userImg': 'img7'}, 'title': "Title 7",'subTitle': "This is subtitle7", 'body': " This is body for title 7", 'postImg': 'postImg7', 'dateCreated': 'date', 'readLength': 'readLength','category': 'c7'}
    ];

    const tags = [
        {'id': 1, 'tagName': 'tag1'},
        {'id': 2, 'tagName': 'tag2'},
        {'id': 3, 'tagName': 'tag3'},
        {'id': 4, 'tagName': 'tag4'},
        {'id': 5, 'tagName': 'tag5'},
    ]
    
    return (
        <div className='home'>
            
            <HomeMain>
                <SubHeader>
                    <SubHeaderOutline>
                        <SubHeaderTitle>
                            <h2>"Always forward,</h2>
                            <br/>
                            <h2>never backward..."</h2>
                            <SubBtn>
                                <SubBtnLink to='/signup'>Start Reading</SubBtnLink>
                            </SubBtn>
                        </SubHeaderTitle>
                        <SubHeaderImage src={img} />
                    </SubHeaderOutline>
                </SubHeader>
                <Trending>
                    <TrendingTitle>
                        <TrendingImg></TrendingImg>
                        <h3>Trending here</h3>
                    </TrendingTitle>
                    <TrendPost posts = { posts } />
                </Trending>

                <AllPosts>
                    <PostListWrap>
                        <PostList posts = { posts } />
                    </PostListWrap>
                    
                    <Tags>
                        <TagTitle>DISCOVER MORE OF WHAT MATTERS TO YOU</TagTitle>
                        <TagListWrap>
                            <TagList tags = { tags} />
                        </TagListWrap>

                    </Tags>
                </AllPosts>
                
            </HomeMain> 
        </div>

    );

}

export default Home;
