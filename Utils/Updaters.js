import { getUserFromId, getProjectFromUserId, getFriendsFromUserId, getUserInfoById, getFeedByuserId} from '../API/APITest'

class Updaters {

    update_user(ctx){
      ctx.setState({ isLoading: true })
      getUserFromId(ctx.props.loggedid).then(data => {
        ctx.props.dispatch({ type: "UPDATE_USER", value: data })
        ctx.setState({
              isLoading: false
            })
      })
    }

    update_projects(ctx){
      getProjectFromUserId(ctx.props.user.id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_PROJECTS", value: data.projects.reverse() })
      })
    }

    update_friendlist(ctx){
      getFriendsFromUserId(ctx.props.user.id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_FRIENDSHIP", value: data.friends })
      })
    }

    update_friend_user(ctx, friend_id){
      return (getUserInfoById(ctx.props.user.id,friend_id).then(data => {
          ctx.props.dispatch({ type: "UPDATE_FRIEND", value: data })
      }))
    }

    update_feed(ctx){
      return (getFeedByuserId(ctx.props.user.id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_FEED", value: data.feed })
      }))
    }




}

const update = new Updaters();
export default update;
