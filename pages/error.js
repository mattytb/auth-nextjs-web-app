import Layout from 'components/layout'
import AuthenticatedUser from 'lib/getAuthenticatedUser'
const Error = (props) => (
    <Layout {...props}>
        <div className="bgWrap">
            <p>sorry there has been an error</p>
        </div>
    </Layout>
)

Error.getInitialProps = async function({ req, res }) {
    
    let cookie = null;
    if(req) cookie = req.headers.cookie;

    const user = await AuthenticatedUser(cookie);
    return {
        metaInfo:{
            title:"Error"
        },
        authentication: {
            authenticatedUser: user,
            cookie
        }
    }
}

export default Error