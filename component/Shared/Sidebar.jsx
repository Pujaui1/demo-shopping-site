import React, { useState } from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X2GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

// import '../Dashboard/dashboard.css'

const Sidebar = () => {
  const [myTabs, setMyTabs] = useState([
    { tabName: "Dashboard", icon: BsGrid1X2Fill , path:"/dashboard"},
    { tabName: "Product", icon: BsFillArchiveFill , path:"/product"},
    { tabName: "Categories", icon: BsFillGrid3X2GapFill , path:"/Categories" },
    // { tabName: "Customers", icon: BsPeopleFill  , path:"/Customers"},
    // { tabName: "Inventory", icon: BsListCheck , path:"/Inventory"},
    // { tabName: "Report", icon: BsMenuButtonWideFill , path:"/Report"},
    { tabName: "Setting", icon: BsFillGearFill , path:"/Setting"},
  ]);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate()
  const handelTabChange = (index,path) => {
    setActiveTab(index);
    navigate(path);
  }
  return (
    <aside className='sidebar'>
      <div className='sidebar-title' >

        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon'>X</span>
      </div>


      <ul className='sidebar-list'>
        {myTabs.map((ele, index) => {
          return (
            <li onClick={() => { handelTabChange(index, ele.path) }} className={activeTab === index ? 'sidebar-list-item tab_active' : 'sidebar-list-item'} key={index}>
              <a href="" >
                <ele.icon className='icon' /> {ele.tabName}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
