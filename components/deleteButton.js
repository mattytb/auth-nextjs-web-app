
import { deleteUserCookie } from '../lib/userCookieHelper'
import Redirect from '../lib/redirect.js'
import { deleteUser } from '../lib/apiClient'

export default class DeleteButton extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            deleteButtonVisible : true
        }
    }

    handleClick(){
        const self = this;
        this.setState({deleteButtonVisible : false})
        FB.logout(async function(response){
            await deleteUser(self.props.currentUser.token, self.props.currentUser.id);
            deleteUserCookie();
            Redirect('/');
        });
    }

    render(){
        const deleteButtonMarkup = () => {
            return (
                <div>
                    <button id="deleteButton" onClick={() => this.handleClick()}>Delete</button>
                    <style jsx>
                    {`
                        button {
                            background-color: red;
                            color: white;
                            border: none;
                            outline: none;
                            padding:5px 10px 6px;
                            border-radius: 3px;
                            box-shadow: 3px 3px 3px lightgrey;
                            float:right;
                            margin-top:17px;
                        }
                        button:hover {
                            cursor: pointer;
                            box-shadow: none;
                        }
                    `}
                    </style>
                </div>
            )
                
        }
        const spinnerMarkup = () => {
            return (
                <div>
                    <span></span>
                    <style jsx>
                    {`
                        span {
                            width:15px;
                            height:15px;
                            float:right;
                            margin-top:17px;
                            background: #fff url("../static/loader.gif")  no-repeat 0px 0px;
                            background-size: 15px 15px;
                        }
                    `}
                    </style>
                </div>
            )
        }
        let button = null;
        if(this.props.userId === this.props.currentUser.id && this.state.deleteButtonVisible){
            button = deleteButtonMarkup();
        }
        else if(this.props.userId === this.props.currentUser.id && !this.state.deleteButtonVisible){
            button = spinnerMarkup();
        }
        else {
            button = "";
        }

        return (
            <div>{button}</div>
        )
    }
}