import { getUserFromId, getProjectFromUserId, getFriendsFromUserId, getUserInfoById, getFeedByuserId} from '../API/APITest'

class Updaters {

    update_user(ctx, id){
      ctx.setState({ isLoading: true })
      return(getUserFromId(id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_USER", value: data })
        ctx.setState({
              isLoading: false
            })
      }))
    }

    update_projects(ctx,id){
      getProjectFromUserId(id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_PROJECTS", value: data.projects.reverse() })
      })
    }

    update_friendlist(ctx,id){
      getFriendsFromUserId(id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_FRIENDSHIP", value: data.friends })
      })
    }

    update_friend_user(ctx, friend_id, user_id){
      return (getUserInfoById(user_id,friend_id).then(data => {
          ctx.props.dispatch({ type: "UPDATE_FRIEND", value: data })
      }))
    }

    update_feed(ctx,id){
      return (getFeedByuserId(id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_FEED", value: data.feed })
      }))
    }




}

const update = new Updaters();
export default update;
