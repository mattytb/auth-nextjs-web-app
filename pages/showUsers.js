import AuthenticatedUser from '../lib/getAuthenticatedUser'
import Redirect from '../lib/redirect.js'
import Layout from '../components/layout'
import { getUsers } from '../lib/apiClient'
import DeleteButton from '../components/deleteButton'

    
const ShowUsers = (props) => (
    
    <Layout {...props}>
        <div className="bgWrap users">
            <ul>
                {props.userList.map((user, index) => (
                    <li key={index}>
			 			<img src={user.image} alt={user.name}/> 
			 			<span>{user.name}</span>
                         <DeleteButton userId={user.id} currentUser={props.currentUser} />
			 		</li>
                ))}
            </ul>
            <style jsx>
              {`
                .loaderMain {
                    float:left;
                    margin-left:50px;
                }
                ul {
                    list-style: none;
                    width:calc(100% -50px);
                    margin:50px;
                    padding: 0 0px;
                    border-top:1px solid #ccc;
                }
                ul li {
                    border-bottom:1px solid #ccc;
                    padding:10px 0;
                    float:left;
                    clear:left;
                    width:100%;
                }
                ul li img {
                    float:left;
                    margin-top:5px;
                }
                ul li span {
                    float:left;
                    margin:20px;
                }
                #deleteButton {
                    float:right;
                    margin-top:15px;
                }
                @media only screen and (max-width: 935px) {
                    ul {
                        margin: 0 25px;
                    }
                }
              `}
            </style>
        </div>
    </Layout>
)

ShowUsers.getInitialProps = async function({ req, res }) {
    
    let cookie = null;

    if(req) cookie = req.headers.cookie;

    const user = await AuthenticatedUser(cookie);


    if(!user) Redirect('/404', res);

    const data = await getUsers(user.token, user.id);

    if(!data.success) Redirect('/error', res);

    return {
        metaInfo:{
            title:"Users authenticated"
        },
        navigation: {
            usersActive: "selected"
        },
        authentication: {
            authenticatedUser: user,
            cookie
        },
        userList : data.users,
        currentUser: user
    }
    
}
    
export default ShowUsers