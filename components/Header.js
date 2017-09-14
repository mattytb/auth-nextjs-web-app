import FacebookLoginButton from '../components/FacebookLoginButton'
import LoggedInSection from '../components/LoggedInSection'

export default class Header extends React.Component {

    constructor (props) {
      super(props);
    }

    render(){
        
        let loggedInSection = null;
        loggedInSection = true ? <LoggedInSection /> : <FacebookLoginButton />;

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
