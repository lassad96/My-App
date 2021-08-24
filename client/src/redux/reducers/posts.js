import { FETCH_ALL, DELETE, LIKE, UPDATE, CREATE} from "../constants/posts";
export default (posts = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
            return action.payload;   //state=posts here we returning action.payload which is actually data who are posts
            case LIKE:
                return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
            case CREATE:
            return [...posts, action.payload]; //send an array of posts : spread and add newpost stored in payload
        case UPDATE:
                return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
                return posts.filter((post) => post._id !== action.payload);
            default:
            return posts;
    }
};
