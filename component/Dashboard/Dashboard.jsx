import React, { useEffect, useState } from 'react'
import { BsFillArchiveFill, BsFillGrid3X2GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import './dashboard.css'

import ReactPaginate from "react-paginate";


const Dashboard = () => {

  const [new_result, SetNew_result] = useState([]);
  const [new_resultLoader, SetNew_resultLoader] = useState(true);
  const [tempTable, setTempTable] = useState([]);
  const [currentPage, SetcurrentPage] = useState(1);
  // const [PostperPage, SetPostperpage] = useState(10);
  const itemperpage = 10;


  useEffect(() => {
    GetTableDat();
  }, []);

  const handleSearchDropdown = () => {
    ////Linear search
    var input, search;
    let filterData = [];
    input = document.getElementById("myInput");
    search = input.value.toUpperCase();
    filterData = tempTable.filter((item) => {
      if (item.schoolname.toUpperCase().indexOf(search) !== -1) {
        return true;
      }
    });
    //setCurrentPage(1);
    SetNew_result(filterData);
  };
  const GetTableDat = () => {
    SetNew_resultLoader(true);
    const response = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify(),
    };
    return fetch("https://health.data.ny.gov/resource/nvtm-yit2.json", response)
      .then((res) => res.json())
      .then((result) => {

        //console.log(result)
        return result;

      })
      .then((result) => {
        if (result) {

          const trunc_result = result.slice(0, 100);
          console.log("new_result", trunc_result);
          SetNew_result(trunc_result);
          setTempTable(trunc_result);
          SetNew_resultLoader(false);

          // console.log( "result--------",result)
          // console.log("------->",result.length)



          //console.log("pass==",result);
          // Handle success
        } else {
          //console.log("fail==",result);
          // Handle failure
          SetNew_resultLoader(false);
        }
      })
  }


  // pagination logic -----

  const indexOfLastItem = (currentPage + 1) * itemperpage;
  const indexOfFirstItem = indexOfLastItem - itemperpage;
  const currentItems = new_result.slice(indexOfFirstItem, indexOfLastItem);
  const totalpages = Math.ceil(new_result.length / itemperpage);

  const handlePageClick = (selectedPage) => {
    SetcurrentPage(selectedPage.selected);
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h5>DASHBOARD</h5>
      </div>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h5>Products</h5>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h6>300</h6>
        </div>

        <div className='card'>
          <div className='card-inner'>
            <h5>Categories</h5>
            <BsFillGrid3X2GapFill className='card_icon' />
          </div>
          <h6>12</h6>
        </div>


        <div className='card'>
          <div className='card-inner'>
            <h5>Customers</h5>
            <BsPeopleFill className='card_icon' />
          </div>
          <h6>33</h6>
        </div>



        <div className='card'>
          <div className='card-inner'>
            <h5>Alerts</h5>
            <BsFillBellFill className='card_icon' />
          </div>
          <h6>40</h6>
        </div>
      </div>
      <>
        <h5>Tabs</h5>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Products</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Categories</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Customers</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-alert" type="button" role="tab" aria-controls="pills-alert" aria-selected="false">Alerts</button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <input type="text" placeholder='search' id="myInput" onKeyUp={handleSearchDropdown} />
            {new_resultLoader ? <p>Loading please wait !!!</p> :
              new_result.length > 0 ?
                <table>
                  <tr>
                    <th>SchoolType</th>
                    <th>SchoolName</th>
                    <th>City</th>
                  </tr>
                  {currentItems.map(student => (
                    <tr key={student.Id}>
                      <td>{student.type}</td>
                      <td>{student.schoolname}</td>
                      <td>{student.city}</td>
                    </tr>
                  ))}


                </table>
                :
                <p>No data</p>

            }
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={totalpages}
              marginPagesDisplayed={4}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />



          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">2</div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">3</div>
          <div className="tab-pane fade" id="pills-alert" role="tabpanel" aria-labelledby="pills-contact-tab">4</div>
        </div>

        <br />
      </>



    </main>
  )
}

export default Dashboard
