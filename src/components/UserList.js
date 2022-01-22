import ReactPaginate from "react-paginate";
import {useState} from 'react'; 
import {useEffect} from 'react'
import TopBar from './TopBar'

function UsersList() {

    const[items,setItems]= useState([]);

    useEffect(()=>{
        const getUsers = async()=>{
            const res = await fetch("/api/users/top");
            const data = await res.json();
            setItems(data)
        };
        getUsers();
    },[]);
    
    //console.log(items) //
    const fetchUsers = async(currentPage) => {
        const res = await fetch(`/api/users/top?page=${currentPage}&size=5`);
        const data = await res.json();
        return data;
    };

    const handlePageclick = async (data) =>{
    console.log(data.selected);
    
    let currentPage = data.selected
    const usersServer = await fetchUsers(currentPage);
    setItems(usersServer) 
    }

  return (
    <div>
        
        <div className="card-shadow mb-4">
            <TopBar/>
        <div className="card-body">
         <div className="table-responsive">
         <h1 className="h3 mb-2 text-gray-800">Lista de todos los Usuarios.</h1>
            {items.map((item)=> {
            return (
               <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Email Registrado</th>
                      </tr>
                    </thead>
                    <tfoot></tfoot>
                    <tbody>
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                          </tr>
                    </tbody>
                  </table>
                )
                })}
                
      <ReactPaginate
       previousLabel={'<<'}
       nextLabel={'>>'}
       breakLabel ={'...'}
       pageCount={6}
       marginPagesDisplayed={2}
       pageRangeDisplayed={2}
       onPageChange ={handlePageclick}
       containerClassName={'pagination justify-content-center'}
       pageClassName={'page-item'}
       pageLinkClassName={'page-link'}
       previousClassName={'page-item'}
       previousLinkClassName={'page-link'}
       nextClassName={'page-item'}
       nextLinkClassName={'page-link'}
       breakClassName={'page-item'}
       breakLinkClassName={'page-link'}
       activeClassName={'active'}
/>
        </div>
        </div>
        </div>
  </div> 
  );
}

export default UsersList;
