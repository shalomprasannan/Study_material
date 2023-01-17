const Profile = (props) => {
    return ( 
        <div>
            this is your profile..!
            <button onClick={props.logout}>Logout</button>
        </div>
     );
}
 
export default Profile;