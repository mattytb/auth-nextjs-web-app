import Link from 'next/link'

const NavBar = (props) => (
    <div id="navBar">
        <div className="inner">
            <ul>
                <li>
                    <Link href="/"><a className={props.indexSelected}>Home</a></Link>
                </li>
                <li>
                    <Link href="/showUsers"><a className={props.usersSelected}>Users</a></Link>
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
            #navBar .inner {
                max-width:900px;
                margin:0 auto;
            }

            #navBar ul {
                padding:0;
                margin:0;
                display: inline;
                text-align: center;
            }
            #navBar ul li {
                list-style: none;
                font-family: sans-serif;
                float:left;
                margin: 0px 0 0 0;
            }
            #navBar ul li a {
                color:#fff;
                float:left;
                text-decoration: none;
                padding:14px;
                margin-top:4px;
            }
            #navBar ul li a.show {
                display: block;
            }
            #navBar ul li a.hide {
                display: none;
            }

            #navBar ul li a.selected {
                background-color: #f8f8f8;
                color: #333;
            }

            @media only screen and (max-width: 935px) {

                #navBar .inner {
                    padding: 0 25px;
                }

            }
            `}
        </style>
    </div>
)

export default NavBar