import { deleteComment } from '../../actions/comment_actions';
import CommentItem from './comment_item';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
      deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(null, mapDispatchToProps)(CommentItem);
