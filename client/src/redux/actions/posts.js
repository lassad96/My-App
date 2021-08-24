import * as api from '../../api'; //import everything from the actions as api 

// Action Creators functions that return actions 
export const getPosts = () => async (dispatch) =>{
//with redux thunk since we re dealing with async logic we have to add the func async(dispatch)
try {
    //fetch data from api data = response from back data represent posts 
    const { data } = await api.fetchPosts(); 
    //to return the action we have to dispatch it 
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

export const createPost= (post) => async (dispatch)=> {
try {
  const {data}= await api.createPost(post);

  dispatch ({type:'CREATE', payload: data});
} catch (error) {
  console.log(error.message);
}
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};