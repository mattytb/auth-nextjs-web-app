import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const NavBar = (props) => (
        <div id="navBar">
            <div className="inner">
                <ul>
                    <li>
                        <Link href="/"><a className={props.indexActive || ""}>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/showUsers"><a className={props.usersActive || ""}>Users</a></Link>
                    </li>
                </ul>
            </div>
            <style jsx>
                {`
                #navBar {
                    width:100%;
                    height:50px;
                    background-color: #a0a0a0;
                    display: block;
                }
                .inner {
                    max-width:900px;
                    margin:0 auto;
                }
    
                ul {
                    padding:0;
                    margin:0;
                    display: inline;
                    text-align: center;
                }
                ul li {
                    list-style: none;
                    font-family: sans-serif;
                    float:left;
                    margin: 0px 0 0 0;
                }
                ul li a {
                    color:#fff;
                    float:left;
                    text-decoration: none;
                    padding:14px;
                    margin-top:4px;
                }
                ul li a.show {
                    display: block;
                }
                ul li a.hide {
                    display: none;
                }
    
                ul li a.selected {
                    background-color: #f8f8f8;
                    color: #333;
                }
                .hidden {
                    display:none;
                }
    
                @media only screen and (max-width: 935px) {
    
                    .inner {
                        padding: 0 25px;
                    }
    
                }
                `}
            </style>
        </div>
)

export default NavBar
