import React, {ReactNode} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {getProfile, ProfilePageTypeAPI, setUserProfile} from "../../redux/profile_reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';

export interface ProfilePropsType extends RouteComponentProps<{ userId: string }> {
	children?: ReactNode
	profile: Array<ProfilePageTypeAPI>
	setUserProfile: (profile: any) => void
	getProfile: (userId: string) => void
}
class ProfileContainer extends React.Component<ProfilePropsType> {
	componentDidMount() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = "1"
		}
		this.props.getProfile(userId)
		/*	let userId = this.props.match.params.userId
			if (!userId) {
				userId = "1"
			}
			usersAPI.getProfile(userId).then(data => {
				this.props.setUserProfile(data)
			})*/
		/*axios
			.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId )
			.then(response => {
				this.props.setUserProfile(response.data)
				console.log(response)
			});*/
	}

	render() {
		return (
			<Profile {...this.props} profile={this.props.profile} setUserProfile={setUserProfile}/>
		)
	}
}
const mapStateToProps = (state: RootStoreType) => ({
	profile: state.profileReducer.profile
})
const WithUrlDataContainerComponent = withRouter<ProfilePropsType & RouteComponentProps, any>(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent)