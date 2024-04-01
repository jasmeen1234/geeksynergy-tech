import React ,{useState} from 'react'
import '.././App.css';
import Company from './Company';

function CompanyInfo() {
    const [userData, setUserData] = useState([]);
  

   
        fetch('https://hoblist.com/api/movieList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: "movies",
                language: "kannada",
                genre: "all",
                sort: "voting"
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.result);
            setUserData(data.result)
            
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    
  return (
    <div>
     <Company/>
      <div  className='company_info'>
      {userData.map(item =>(
        <div className='row'>
            <div>
     <img  style={{height:"80%",width:"70%"}}src={item.poster}/></div>
     <div className='col'>
       Genre: {item.genre}<br></br>
      Director:{item.director}<br></br>
      Starring: {item.stars}<br></br>
      <div style={{color:"lightblue"}}>
      {item.pageViews} views | voted by {item.totalVoted} people</div>
      
     </div> 
     <button className='bttn'>Watch Trailor</button>
</div>

))}
        </div>
        
     
    </div>
  )
}

export default CompanyInfo
