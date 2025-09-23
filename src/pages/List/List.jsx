import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  // ✅ initialise as an array so .map works
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        // make sure data is an array
        setList(Array.isArray(response.data.data) ? response.data.data : []);
      } else {
        toast.error('Error fetching list');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error');
    }
  };
const removeFood=async(foodId)=>{
  console.log(foodId)
  const response=await axios.post(`${url}/api/food/remove`,{id:foodId})
  await fetchList()
  if(response.data.success){
    toast.success(response.data.message)
  }
  else{
    toast.error("Error")
  }

}
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All food List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={()=>removeFood(item._id)} className='cursor' >x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
