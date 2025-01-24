import { useState,useEffect } from "react";
import { MdKeyboardArrowUp,MdKeyboardArrowDown  } from "react-icons/md";
function Accordion() {
    const [visibleDiv,setVisibleDiv] = useState(
        [{id:1,name:'HTML',visible:false},
        {id:2,name:'CSS',visible:false},
        {id:3,name:'JavaScript',visible:false}]
    )
    function updateDiv(id){
      let updateObject = [...visibleDiv]
      updateObject[id-1] = {id:id,name:visibleDiv[id-1].name,visible:!visibleDiv[id-1].visible}
        setVisibleDiv(updateObject)
    }
    return (
      <div className="Accordion-container">
        <div className="Accordion-each">
          <div onClick={()=>updateDiv(1)} style={{display:"flex",alignItems:'center',}}               className="accordion-icon">
            HTML{visibleDiv[0].visible?<MdKeyboardArrowUp size={40}/>:<MdKeyboardArrowDown size={40}/>}
            <span
              aria-hidden={true}
            />
          </div>
          {visibleDiv[0].visible && <div>
            The HyperText Markup Language or HTML is the
            standard markup language for documents designed to
            be displayed in a web browser.
          </div>}
        </div>
        <div className="Accordion-each">
          <div onClick={()=>updateDiv(2)} style={{display:"flex",alignItems:'center',}}          className="accordion-icon">
            CSS{visibleDiv[1].visible?<MdKeyboardArrowUp size={40}/>:<MdKeyboardArrowDown size={40}/>}
            <span
              aria-hidden={true}
     
            />
          </div>
          {visibleDiv[1].visible &&   <div>
            Cascading Style Sheets is a style sheet language
            used for describing the presentation of a document
            written in a markup language such as HTML or XML.
          </div>}
        </div>
        <div className="Accordion-each">
          <div onClick={()=>updateDiv(3)} style={{display:"flex",alignItems:'center',}} className="accordion-icon">
            JavaScript{visibleDiv[2].visible?<MdKeyboardArrowUp size={40}/>:<MdKeyboardArrowDown size={40}/>}
            <span
              aria-hidden={true}
              
            />
          </div>
          {visibleDiv[2].visible &&  <div>
            JavaScript, often abbreviated as JS, is a
            programming language that is one of the core
            technologies of the World Wide Web, alongside HTML
            and CSS.
          </div>}
        </div>
      </div>
    );
  }
  
  export default Accordion;