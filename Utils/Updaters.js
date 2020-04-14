import { getUserFromId, getProjectFromUserId, getFriendsFromUserId} from '../API/APITest'


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
      console.log("hello")
      getProjectFromUserId(ctx.props.user.id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_PROJECTS", value: data.projects.reverse() })
      })
    }

    _update_friendlist(ctx){
      getFriendsFromUserId(ctx.props.user.id).then(data => {
        ctx.props.dispatch({ type: "UPDATE_FRIENDSHIP", value: data.friends })
      })
    }



}
const update = new Updaters();
export default update;
