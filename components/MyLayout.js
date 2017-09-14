import Header from './Header'
import Head from '../components/Head'
import NavBar from '../components/NavBar'

const Layout = (props) => (
  <div>
    <Head headerText={props.headerText}/>
    <Header headerText={props.headerText} />
    <NavBar indexSelected={props.indexSelected || ""} usersSelected={props.usersSelected || ""}/>
    <div id="content">
				<div className="inner">
            {props.children}
        </div>
    </div>
    <style jsx>
        {`
          #content {
            width:100%;
            height:auto; 
            display:block;
            position:absolute;
          }
          #content .inner {
            max-width:900px;
            margin:0 auto;

          }

          @media only screen and (max-width: 935px) {
            #content .inner {
              padding:0 25px;
            }
          }
        `}
    </style>
  </div>
)

export default Layout