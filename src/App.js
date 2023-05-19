import React from "react";

import { Comment } from '@ant-design/compatible';
import { Tooltip, Avatar } from 'antd';
import moment from 'moment';

class App extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  render() {
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span key="comment-basic-like">
        <Tooltip title="Like">
         
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span key=' key="comment-basic-dislike"'>
        <Tooltip title="Dislike">
         
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span key="comment-basic-reply-to">Reply to</span>,
    ];
    return (
      <Comment
        actions={actions}
        author={<a></a>}
        avatar={
          <Avatar
            src="<CommentOutlined />"
            alt="<CommentOutlined />"
          />
        }
        content={
          <p>
           Write your comment here..
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}

export default App;