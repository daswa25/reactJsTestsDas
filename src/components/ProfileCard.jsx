function ProfileCard(props){
    return(<div id={props.id} className='card'>
        <h1>Name:{props.name}{props.role ==='SysAdmin' ? <span className='admin-label'>admin</span>:null}</h1>
        <p>role:{props.role}</p>
    </div>);
}
export default ProfileCard;