
import { useNavigate } from 'react-router-dom';
import NoDataImg from '../../Assets/Images/NoData.jpg'
import './NoData.css';
const NoDataFound = ({txt}) => {
    const navigate = useNavigate();
  return (
    <>
    <div className='p-4' >
      <div className="no-data ">             
            <img src={NoDataImg} className='img-fluid'/>
            <div className="text-danger p-2">
            {txt ? txt : ""}             
            </div>
            <button type="button" class="btn btn-info btn-sm" onClick={()=>navigate('/')} style={{background:'#c7e0e5'}}>Go Home</button>                        
        </div>
        </div>
    </>
  )
}

export default NoDataFound;
