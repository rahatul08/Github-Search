import React from 'react';
import UsersItem from "./UsersItem";
import Spinner from "../layout/Spinner";
import Users from "./UsersItem";
import  PropTyoes from 'prop-types';


const  User = ({ users, loading}) => {
    if (loading){
        return <Spinner/>
    }
    else {
        return (
            <div style={userStyle}>

                {users.map(user =>(
                    <UsersItem key={user.id} user={user} />
                ))}
            </div>
        );
    }
}
Users.propTypes = {
    users: PropTyoes.array.isRequired,
}
const userStyle ={
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1rem'
}
export default User;
