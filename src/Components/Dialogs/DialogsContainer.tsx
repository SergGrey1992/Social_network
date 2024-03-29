import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStoreType} from "../../redux/redux_store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {addMessage, changeMessageText} from "../../redux/dialogs_reducer";

const mapStateToProps = (state: RootStoreType) => {
  return {
    messagesPage: state.dialogsReducer,
    newMessageText: state.dialogsReducer.newMessageText,
    auth: state.auth.isAuth
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {addMessage,changeMessageText }),
  withAuthRedirect
)(Dialogs);

