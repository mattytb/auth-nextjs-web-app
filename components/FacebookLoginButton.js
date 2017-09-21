export default (props) => (
    <div>
        <a className="facebookButton" onClick={() => props.loginClick()}>Continue with Facebook</a>
        <style jsx>
            {`
                .facebookButton {
                    width:auto;
                    height:40px;
                    float:right;
                    background: #3B5998 url("../static/fb-logo.png")  no-repeat 0px 0px;
                    background-size: 40px 40px;
                    cursor:pointer;
                    font-family: sans-serif;
                    color:#f7f7f7;
                    text-indent: 50px;
                    text-decoration: none;
                    font-size:18px;
                    line-height: 2.3;
                    border-radius: 5px;
                    padding-right:25px;
                    box-shadow: 3px 3px 3px lightgrey;
                    font-weight:bold;
                    margin: 48px 0px 0 0;
                }

                .facebookButton:hover {
                    box-shadow: none;
                }

                @media only screen and (max-width: 935px) {
                    .facebookButton {
                        margin: 0 auto;
                        float:none;
                        display: inline-block;
                        clear: both;
                        margin-top:10px;
                    }
                }
            `}
        </style>
    </div>
)