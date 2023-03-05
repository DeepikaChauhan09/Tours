
import { Card } from "./Card";
import { data } from "./Data";



 function eachCard(val,k) {
    return(
        <>
      <Card 
       imgsrc={val.imgLink_}
       name={val.name_}
       title={val.title_} 
       cost={val.cost}
       link={val.link_}
      />

        </>
    );
    
 }




function App() {
    return(
        <>
         <h1>Our Tours</h1>
         {/* <Card
         
        //  imgsrc="./Images/italy.jpg"
        //  name="italy tour"
        //  title="tour"
        //  link=""
             /> */}

           {/* <Card
         imgsrc={data[0].imgLink_}
         name={data[0].name_}
         title={data[0].title_}
         link={data[0].link_}
         
          /> */}
  
  
         { 
            data.map(eachCard)
         }

        </>
    );
}

export {App};