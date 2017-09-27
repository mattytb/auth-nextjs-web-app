import Head from './head'
import Header from './header'
import NavBar from './navBar'

const Layout = (props) => (
  <div>
    <Head {...props.metaInfo}/>
    <Header {...props.authentication} />
    <NavBar {...props.navigation}/>
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