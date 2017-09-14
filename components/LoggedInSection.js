export default (props) => (
    <div id="loggedInSection">
        <img src="/static/profile_holding.jpg"/>
        <div className="innerWrap">
            <span>Welcome, Matthew Barnden</span>
            <a className="facebookLogoutButton">Log out</a>
        </div>
        <style jsx>
            {`
                #loggedInSection {
                    margin-top:45px;
                    float:right;
                }
                #loggedInSection img, #loggedInSection span {
                    float:right;
                }
                #loggedInSection span {
                    margin-right:15px;
                }
                .facebookLogoutButton {
                    width: auto;
                    height: 25px;
                    float: right;
                    margin:7px 10px 0 0px;
                    background: #3B5998 url("../static/fb-logo.png")  no-repeat 4px 2.2px;
                    background-size: 22px 22px;
                    color: #f7f7f7;
                    text-indent: 34px;
                    text-decoration: none;
                    font-size: 13px;
                    line-height: 2;
                    border-radius: 5px;
                    padding-right: 25px;
                    box-shadow: 3px 3px 3px lightgrey;
                    cursor:pointer;
                    font-weight:bold;
                }

                .facebookLogoutButton:hover {
                    box-shadow: none;
                }

                @media only screen and (max-width: 935px) {
                    #loggedInSection {
                        float: none;
                        display: inline-block;
                        margin: 0 auto;
                        margin-top:10px;
                    }

                    .facebookLogoutButton {
                        float:left;
                        margin-left:15px;
                    }

                    #loggedInSection img, #loggedInSection span {
                        float:left;
                    }
                    #loggedInSection span {
                        margin-left:15px;
                    }
                }
            `}
        </style>
    </div>
)