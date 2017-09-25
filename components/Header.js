import FacebookLoginButton from '../components/facebookLoginButton'
import LoggedInSection from '../components/loggedInSection'
import Spinner from '../components/spinner'
import { deleteUserCookie, createUserCookie } from '../lib/userCookieHelper'
import FacebookLoginInit from '../lib/facebookLoginInit'
import { getFacebookUser } from '../lib/apiClient'
import Redirect from '../lib/redirect.js'

export default class Header extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
          user:props.authenticatedUser,
          loggedIn: props.authenticatedUser !== null
      }
      
      this.statusChangeCallback = this.statusChangeCallback.bind(this);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    componentDidMount() {
        FacebookLoginInit(this.statusChangeCallback);
    }

    statusChangeCallback(response) {
        if (response.status !== 'connected') {
          this.setState({user:null, loggedIn:false});
          deleteUserCookie(this.props.cookie);
        }
        else {
            this.setState({loggedIn:true, user:this.state.user});
        }
    }

    handleLoginClick(){
        var self = this;
        this.setState({loggedIn:null});
        FB.login(async function(response){
            const data = await getFacebookUser(response.authResponse.accessToken);
            const user = createUserCookie(null, data.token, data.userId, data.name, data.image);
            self.setState({user:user, loggedIn:true});
            Redirect('/showUsers');
        }, {scope: 'email,public_profile', return_scopes: true});
    }

    handleLogoutClick(){
        var self = this;
        self.setState({loggedIn:null});
        FB.logout(function(response){
           deleteUserCookie();
           self.setState({user:null, loggedIn:false});
           Redirect('/');
        });
    }

    render(){
        let loggedInSection = null;

        if(this.state.loggedIn === null){
            loggedInSection = <LoggedInSection user={this.state.user} logout={this.handleLogoutClick}/>         
        }
        else if(this.state.loggedIn === null){
            loggedInSection = <FacebookLoginButton loginClick={ this.handleLoginClick } />;
        }
        else {
            loggedInSection = <Spinner />;
        }

        return (

            <div id="header">
                <div className="inner">
                    <span id="logo"></span>
                    <div id="logoCell">
                        <h1>Authenticate</h1>
                        <span>Facebook login with an api</span>
                    </div>
                    {loggedInSection}
                </div>
                <style jsx>{`
                    #header {
                        width:100%;
                        height: 150px;
                        border-bottom:1px solid #ccc;
                        background-color:#fff;
                        font-family: sans-serif;
                    }

                    #header .inner {
                        max-width:900px;
                        margin:0 auto;
                    }
                    #header .inner span#logo {
                        width:36px;
                        height:45px;
                        float:left;
                        clear:left;
                        background:url("/static/lock.gif") no-repeat 0 0;
                        background-size: 36px 45px;
                        margin: 47px 15px 0 0;
                    }

                    #header .facebookButton {
                        float:right;
                        margin: 48px 0px 0 0;
                    }

                    #header #logoCell {
                        width:300px;
                        float:left;
                        margin-top:33px; 
                    }

                    #header #logoCell h1 {
                        font-size: 32px;
                        margin: 10px 0 0 0;
                        color: #333;
                        font-weight:normal;
                    }

                    #header #logoCell span {
                        font-size: 15px;
                        color: #a9a9a9;
                        float:left;
                        margin-top:-2px;
                    }

                    @media only screen and (max-width: 935px) {
                        #header .inner {
                            padding:0 25px;
                        }
                        
                        #header #logoCell {
                            float: none;
                            margin: 0 auto;
                            margin-top:10px;
                            display: inline-block;
                            clear: both;
                        }
                        #header .inner span#logo {
                            display: none;
                        }
                    }
            `}</style>
            </div>
        )
    }
}
