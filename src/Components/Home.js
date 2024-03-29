import './Home.css';

function Home() {
    return (
        <div>
            <div className="home">
            
            <div style={{width:"38%",marginLeft:"40px",padding:"130px 0"}}>
                <div>
                <h1 style={{fontWeight:"800",fontSize:"46px",textAlign:"center",lineHeight:"50px"}}>Let us find your 
<span style={{color:"#BE123C"}}> Forever Food.</span></h1>
                </div>
                <div style={{textAlign:"center",fontSize:"18px"}}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                </div>
                <div>
                    <button  style={{backgroundColor:"rgb(225 29 72)",color:"white",padding:"16px 46px",border:"none",borderRadius:"6px",margin:"0px 10px",fontWeight:"600"}}>Search Now</button>
                    <button style={{color:"rgb(225 29 72)",padding:"16px 46px",border:"none",borderRadius:"6px",fontWeight:"600"}}>Know more</button>
                </div>
            </div>
            </div>
            <div className="page">
            <section style={{ width: "50%" ,margin:"100px 50px"}}>
              <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" height="400px"/>
            </section>
            <section style={{ width: "50%" }}>
              
            </section>
    </div>
        </div>
    );
}

export default Home;