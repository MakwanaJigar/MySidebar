import { useState } from "react";
import "./App.css";
import {motion} from 'framer-motion';


function App() {

const [open,setOpen]=useState(true);
const sidecontainervariants ={
  true:{
    width:'15rem',
  },
  false:{
    transition:{
      delay:0.6
    }
  }
}

const sidebarvariants ={
  true:{},
  false:{
    width:'3rem',
    transition:{
      delay:0.1
    }
  }
}

const profilevariants ={
  true:{
    alignself:'center',
    width:'4rem'
  },
  false:{
    alignself:'flex-start',
    marginTop:'2rem',
    width:'3rem'
  }
}

// FOR COLLAPSING SIDEBAR

const handleToggle = () => {

  setOpen(!open)

}


  return (
    <div className="App">
      {/* Sidebar start's here */}
      <motion.div
        data-open={open}
        variants={sidecontainervariants}
        initial={`${open}`}
        animate={`${open}`}
      
      className="sidebar_container">
        <motion.div  
         initial={`${open}`}
         animate={`${open}`}
         variants={sidebarvariants}
        className="sidebar">
          {/* Hamburger icon in sidebar */}
           <motion.div whileHover={{
            scale:1.2,
            rotate:180,
            backgroundColor:"rgba(255,255,255,0.3)",
            backdropFilter:'blur(3.5px)',
            WebkitBackdropFilter:"(3.5px)",
            border:"1px solid rgba(255,255,255,0.18)",
            transition:{
              delay:0.2,
              duration:0.2
            }
           }}
           onClick={handleToggle} className="lines_icon">
            
            <i className="fa fa-list text-light"></i>
            </motion.div> 
          
         

          {/* Profile in Sidebar */}
          <motion.div className="profile"
          layout
          transition={{duration:0.4}}
          initial={`${open}`}
          animate={`${open}`}
          variants={profilevariants}
          whileHover={{
            backgroundColor:"rgba(255,255,255,0.3)",
            boxShadow:"0 8px 32px 0 rgba(31,38,135,0.37)",
            backdropFilter:"blue(5.5px)",
            WebkitBackdropFilter:"blue(5.5px)",
            border:"1px solid rgba(255,255,255,0.18)",
            cursor:"pointer"
          }}
          >
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </motion.div>

          {/* UL & Li Groups of Sidebar */}

          <div className="groups">
             {/* GROUP ONE START'S HERE */}
            <motion.div 
             initial={`${open}`}
             animate={`${open}`}
             variants={profilevariants}
            className="group">
              <h3>ANALYTICS</h3>
              <div className="item">
                <div>
                  <div className="icon">
                    <i className="fa fa-dashboard"></i>
                    <span>DASHBOARD</span>
                  </div>

                  <div className="icon">
                    <i className="fa fa-dashboard"></i>
                    <span>Perfomance</span>
                  </div>
                </div>
              </div>
            </motion.div>
             {/* GROUP ONE END'S HERE */}

           {/* GROUP TWO START'S HERE */}
            <motion.div 
             initial={`${open}`}
             animate={`${open}`}
             variants={profilevariants}
            className="group">
              <h3>CONTENT</h3>
              <div className="item">
               
                <div>

                  <div className="icon">
                    <i className="fa fa-dashboard"></i>
                    <span>SALES</span>
                  </div>

                  <div className="icon">
                    <i className="fa fa-dashboard"></i>
                    <span>CHECKLIST</span>
                  </div>

                  <div className="icon">
                    <i className="fa fa-dashboard"></i>
                    <span>CUSTOMERS</span>
                  </div>
               
                </div>
              
              </div>
            </motion.div>
             {/* GROUP TWO END'S HERE */}

             {/* GROUP THREE START'S HERE */}
            <motion.div 
            initial={`${open}`}
            animate={`${open}`}
            variants={profilevariants} 
           className="group">
              <h3>CUSTOMIZATION</h3>
              <div className="item">
               
                <div>
                  
                  <div className="icon">
                    <i className="fa fa-dashboard"></i>
                    <span>SEGMENTS</span>
                  </div>

                  <div className="icon">
                    <i className="fa fa-dashboard"></i>
                    <span>THEMES</span>
                  </div>

                </div>
              
              </div>
            </motion.div>
            {/* GROUP THREE END'S HERE */}

          </div>
        </motion.div>
      </motion.div>
      {/* Sidear end's here */}

      <div className="body_container"></div>
    </div>
  );
}

export default App;
