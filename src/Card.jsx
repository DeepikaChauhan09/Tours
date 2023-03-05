
function Card(props) {
    return(
        <>
         <div className="cards">

         <div className="each-card">

          <img src={props.imgsrc} alt="image"  />
   
          <h3 className="card-name">{props.name}</h3> 
        
           
           <div  className="card-title"> {props.title} </div>
           <br/>
           <div className="price">{props.cost}</div>

          

          <a href={props.link} target="_blank" >
           <button className="btn" >For more Information  </button>
           </a>

           </div>
           </div>




        </>
    )
}

export {Card};

// image, title-same in all, link, name