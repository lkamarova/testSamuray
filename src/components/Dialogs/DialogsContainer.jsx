import { updateNewMessageBodyCreator, sendMessageCreator,} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => { 
     dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
     dispatch(sendMessageCreator());
    },
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

  //это означает, что мы вызвали функцию коннект, а она вернула другую функцию, и мы в нее передаем значения
  // ф-я connect создает контейнерную компоненту, 
  //внутри контейнерной компоненты она рендерит презентационную компоненту, которую мы в нее передаем (Dialogs)
  //и внутрь презентационной компоненты в качесве пропсов передает те св-ва, которые сидят в этих объктах (f1, f2)
  //container сам положит в первую функцию state а во вторую dispatch

export default DialogsContainer;
