import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  InteractionText,
  Interaction,
  Divider,
} from '../styles/FeedStyles';

const PostCard = ({item}) => {
  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Like';
  }

  if (item.comments == 1) {
    commentText = '1 Comment';
  } else if (item.likes > 1) {
    commentText = item.likes + ' Comments';
  } else {
    commentText = 'Comment';
  }

  return (
    <Card>
      <UserInfo>
        <UserImg source={{uri: item.userImg}} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          <PostTime>{item.postTime.toString()}</PostTime>
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      {item.postImg != null ? (
        <PostImg source={{uri: item.postImg}} />
      ) : (
        <Divider />
      )}
      {/* <PostImg source={require('../assets/posts/post-img-2.jpg')} /> */}
      <InteractionWrapper>
        <Interaction active={item.liked}>
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction>
        <Interaction onPress={() => {}}>
          <Ionicons name="md-trash-bin" size={25} />
        </Interaction>
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
