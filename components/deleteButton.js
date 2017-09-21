
import { deleteUserCookie } from '../lib/userCookieHelper'
import Redirect from '../lib/redirect.js'
import { deleteUser } from '../lib/apiClient'

export default class DeleteButton extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const self = this;
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
        let button = this.props.userId === this.props.currentUser.id 
            ? deleteButtonMarkup() 
            : "";

        return (
            <div>{button}</div>
        )
    }
}