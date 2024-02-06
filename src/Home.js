import './home.css'
function Home(){
    const containerStyles = {
        width: "1200px",
        height: "400px",
        margin: "0 auto",
        backgroundColor: "black",
        borderRadius: "10px",
        marginTop:"500px,"
      }
return(
    <div style={containerStyles}>

     <div className='text' >

      <h1 style={{color:"yellow"}}> Order Food Now </h1>
       <p style={{color:"orange"}}>enjoy your food and stay healthy</p>
      
      </div>

       <div>  

       <img src="https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg" 
        width={"1000px"}  height={"280x"} 
        style={{borderRadius:"10px",marginTop:"90px",marginLeft:"100px"} }  alt=""/>                
          
         </div>
           

   <div className='img'>
         <table>
        
         <h1>Recommended</h1>

        <tr>
        <td>
        <img src="https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg" 
        width={"200px"}  height={"200x"} 
        style={{borderRadius:"10px",}} alt=''></img>
        </td>
        <td> <h3>Burger</h3> </td>
        <td> <h3>$150</h3> </td>
        <td> <input type='number'  placeholder='+ADD'/> </td>
        <td> <button>order</button> </td>
        </tr>

         <tr>
         <td>
        <img src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=600" 
         width={"200px"}  height={"200x"} 
        style={{borderRadius:"10px",}} alt=''></img>
         </td>
        <td> <h3>Cake</h3> </td>
        <td> <h3>$100</h3> </td>
        <td> <input type='number'  placeholder='+ADD'/> </td>
        <td> <button>order</button> </td>
        </tr>

            <tr>
            <td><img src="https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=600" 
             width={"200px"}  height={"200x"} 
            style={{borderRadius:"10px",}} alt=''></img>
            </td>
                <td> <h3>Rolls</h3> </td>
                <td> <h3>$160</h3> </td>
                <td> <input type='number'  placeholder='+ADD'/> </td>
                <td> <button>order </button></td>
            </tr>
            
            <h1>New Launch</h1>

            <tr>
                <td>
            <img src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600" 
             width={"200px"}  height={"200x"} 
             style={{borderRadius:"10px",}} alt=''></img></td>
              <td> <h3>Pizza</h3> </td>
                <td> <h3>$250</h3> </td>
                <td> <input type='number'  placeholder='+ADD'/> </td>
                <td> <button>order</button> </td>
            </tr>

            <tr>
                <td>
            <img src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=600" 
             width={"200px"}  height={"200x"} 
             style={{borderRadius:"10px",}} alt=''></img></td>
               <td> <h3>Juice</h3> </td>
                <td> <h3>$100</h3> </td>
                <td> <input type='number' placeholder='+ADD'/> </td>
                <td> <button>order</button> </td>
            </tr>
            
            <tr>
            <td>
          <img src="https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&w=600" 
            width={"200px"}  height={"200x"} 
            style={{borderRadius:"10px",}} alt=''></img></td>
                 <td> <h3>Ice Cream</h3> </td>
                <td> <h3>$200</h3> </td>
                <td> <input type='number'  placeholder='+ADD'/> </td>
                <td> <button>order</button> </td>
            </tr>

            <tr>
                <td>
          <img src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600" 
             width={"200px"}  height={"200x"} 
             style={{borderRadius:"10px",}} alt=''></img></td>
                 <td ><h3>French Fries</h3> </td>
                <td> <h3>$200</h3> </td>
                <td> <input type='number'  placeholder='+ADD'/> </td>
                <td> <button>order</button> </td>
            </tr>
            
            
         </table>

          </div>

          </div>
                   )
    
                     }

export default Home
/* <div className='img'>
<img src="https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg" 
width={"250px"}  height={"250x"} 
 style={{borderRadius:"10px",}}

alt=""/>
 <p>burger price $500</p>
 <button style={{float:"left",marginBottom:"50px"}}>add</button>
</div> */
