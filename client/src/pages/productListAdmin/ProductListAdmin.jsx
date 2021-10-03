import "./productList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {productRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import {useDispatch, useSelector} from "react-redux"
import { deleteProduct, getProducts } from "../../redux/apiCalls";
export default function ProductListAdmin() {
    const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const products = useSelector(state=> state.product.products)
    useEffect(()=>{
      getProducts(dispatch)
    },[dispatch])

    const handleDelete =(id)=>{
       deleteProduct(id, dispatch)
    }

    const columns = [
  { field: '_id', headerName: 'ID', width: 220},
  { field: 'product', headerName: 'Product', width: 200, renderCell:(params)=>{
      return (
          <div className="productListItem">
              <img src={params.row.img} alt="" className="productListImg"/>
              {params.row.title}
          </div>
      )
  } },
  { field: 'inStoke', headerName: 'Stock', width: 200 },
 
  {
    field: 'price',
    headerName: 'Price',
    width: 160,
   
  },
   {
    field: 'action',
    headerName: 'Action',
    width: 160,
   renderCell: (params)=>{
       return(
        <div className="userListActions">
            <Link to={"/productadmin/"+params.row._id}>
            <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline className="productListDelete" onClick={()=> handleDelete(params.row._id)} />
        </div>
       )
   }
  },
];

    return (
          <>
    <Topbar/>
      <div className="container">
     <Sidebar className="side"/>
        <div className="productList">
        <DataGrid
        rows={products}
        columns={columns}
        getRowId={row=> row._id}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
        </div>
        </>
    )
}
