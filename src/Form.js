import React, { useState } from 'react';
import axios from 'axios';
import { FollowerCtx } from './context/FollowerContext'

const Form = () => {

    const [user, setUser] = useState();

    const {list, setList} = FollowerCtx();
    
    const handleClick = async () =>{
       try{
        let list = await axios.get(`https://api.github.com/users/${user}/followers`);
        setList(list.data);
       }
        catch(err){
            alert('Please enter a valid username');
        }
    }
    

  return (
    <>  
        <h3>Get Follower List</h3>
        <div className="searchArea">
            <input 
                type="text" 
                placeholder="Search followers..." 
                // value={user}
                onChange={(e) => setUser(e.target.value)}
            />
            <button onClick={handleClick}>Search Followers</button>
        </div>
    </>
  )
}

export default Form