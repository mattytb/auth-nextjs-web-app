import Layout from 'components/layout'
import AuthenticatedUser from '../lib/getAuthenticatedUser'

const Index = (props) => (

  <Layout {...props}>
    <div className="bgWrap">
      <h2>Welcome</h2>
      <p>This site is an example of using Facebook login with an API using <a href="https://en.wikipedia.org/wiki/JSON_Web_Token">JSON web tokens</a></p>
      <p>The front end is built using Next.JS, the code is available <a href="https://github.com/esharmony/auth-nextjs-web-app"> here</a> and the backend API is build with Node.JS and this code can be found <a target="_blank" href="https://github.com/esharmony/authentication-api">here </a></p>
      <p>There is a react only version that uses react router for comparison which can be viewed here <a target="_blank" href="https://stormy-anchorage-48490.herokuapp.com/"> here</a> and the code for this can be viewed <a target="_blank" href="https://github.com/esharmony/auth-web-app"> here</a></p>
      <p>There will also be a React Native app for both iOS and Android to follow.</p>
      <h3>On Login</h3>
      <p>On login you will be able to see a list of users who have also logged in to the app - thats it.</p>
      <h3>Why?</h3>
      <p>This app serves two main purposes for me. </p>
      <ol>
        <li>To learn</li>
        <li>To be the base of apps I intend to build in the future needing a userbase.</li>
      </ol><br />
      <p><i>I am in no way interested in your email which is required for this app via the Facebook login, on login you will be able to delete yourself from this app and you will be completely removed from the DB.</i></p>
    </div>
  </Layout>
)

Index.getInitialProps = async function({ req }) {

  let cookie = null;

  if(req) cookie = req.headers.cookie;

  const user = await AuthenticatedUser(cookie);

  return {
    metaInfo:{
      title:"Authenticate with facebook"
    },
    navigation: {
      indexActive: "selected",
      usersActive: !user ? "hidden": ""
    },
    authentication: {
      authenticatedUser: user,
      cookie
    }
  }

}

export default Index