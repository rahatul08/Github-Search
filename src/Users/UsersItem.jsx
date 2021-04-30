import React from 'react'
import PropTypes from 'prop-types'
 const Users = ({ user: {login, avatar_url, html_url} })=>  {
        return (
            <div>
                <div class="card text-center">
                    <img src={avatar_url} alt="" className={'round-img'} style={{width: '90px'}}/>
                  <div class="card-body">
                    <h4 class="card-title">{login}</h4>
                      <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
                  </div>
                 </div>
            </div>
        )

}
Users.propTypes = {
    user:PropTypes.object.isRequired,
}
export default Users;
