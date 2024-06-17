import NavBar from "../../components/NavBar/NavBar"


 function Dashboard(){
  
    return (
        <div  style={{display: 'flex', width: '100vw', height: '100vh',
            alignItems: 'center', justifyContent: 'center',
            background: 'lightgray', flexDirection: 'column'


         }}>
            <NavBar />
        
        <div 
         style={{display: 'flex', width: '62%', height: '100vh',
            alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column',
            background: '#c5c7c9'


         }}
        >
         <h1>DASHBOARD</h1>
        </div>
        </div>

       
    )

 }

 export default Dashboard