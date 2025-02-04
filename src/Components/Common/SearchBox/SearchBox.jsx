import { useNavigate } from "react-router-dom";
import "./SearchBox.css"; 
import { useEffect, useState } from "react";

const SearchBox = () => {  
  const [text,setText] = useState('');
  const navigate = useNavigate()

  useEffect(()=>{
   if(text === ""){
    navigate('/')
   }
  },[text])

  const handleSearch = (e) => {   
    
   const value= e.target.value;
   console.log("value",value) ;
   setText(value)
  }

  const onSearch = () => {
    navigate(`/songs-listings?title=${text}` , { replace: true })
  }
  return (
    <span className=" d-flex gap-2">
    <input type="search"
     id="gsearch" 
     name="gsearch"
     style={{ fontFamily: 'Arial, sans-serif' }}
     placeholder="Search..."
     onChange={handleSearch}
     />
     <i class="bi bi-search" onClick={onSearch}></i>
     </span>
  );
};

export default SearchBox;
