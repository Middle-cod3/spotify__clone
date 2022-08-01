import React from 'react';
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import { useDatalayerValue } from './DataLayer';
import { display } from '@mui/system';
function Header() {
    const [{user},dispatch]=useDatalayerValue();
  return (
    <div className='header'>
        <div className="header__left">
        <SearchOutlinedIcon/>
        <input type="text"  placeholder="Search for Artists, Songs, or Podcasts " />
        </div>
        <div className="header__right">
            <Avatar src={user?.images[0]?.url} alt={user ?.display_name}/>
            <h4>{user ?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header