import React, { useEffect, useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faItalic } from '@fortawesome/free-solid-svg-icons'
import PropTypes from "prop-types";

const TextFrom = ({ heading, mode }) => {
    const [text, setText] = useState("")
    const [eta, setEta] = useState(0)
   
    
    // const [styles, setStyles] = useState({
    //     isItalic: false,
    //     isBold: false,
    //     isUnderline: false,
    // })

    // const [myStyle, setmyStyle] = useState(
    //     {
    //         color: 'white',
    //         backgroundColor: 'black',
    //        border:'2px solid white'
    
    //     }
    // )
    
    
    //   const toogleStyle = ( ) => {
    //     if (myStyle.color === "white") {
    //         setmyStyle({
    //             color: 'black',
    //         backgroundColor: 'white',
    //        border:'2px solid black'
    //         })
    //         setButtonText("Dark Mode")
    //     } else {
    //         setmyStyle({
    //             color: 'white',
    //         backgroundColor: 'black',
    //        border:'2px solid white'
    //         })
    //         setButtonText("Light Mode")
    
    //     }
    // }

   

    const upperCase = () => {

        let newText = text.toUpperCase()

        setText(newText)

    }

    const lowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const clear = () => {
        let newText = ''
        setText(newText)
    }

    // const italic = () => {
    //     setStyles({ ...styles, isItalic: true })
    // }

    const readingTime = () => {
        if (text.length > 0) {

            let wpm = 225
            const words = text.trim().split(/\s+/).length
            console.log('w', words)
            setEta(words / wpm)
        } else {
            setEta(0)
        }
    }

    const extraSpace = () => {
        let newText = text.replace(/\s+/g, ' ').trim()
        setText(newText)
    }

    // useEffect(() => {
    //  readingTime()
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [text])


    useEffect(() => {
        readingTime()
    })


    const onChange = (e) => {
        const value = e.target.value;
        if (value === " ") {
            setText('')
        } else {
            setText(value)
        }

    }

    

   

    return (
        <div className="form-group p-2" style={{color:mode==="dark"?"white":"black"}}>
            <div className='text-heading'>

            <h2>{heading}</h2>
            
          
            </div>
            <textarea style={
               {
                backgroundColor: mode==="dark" ? "black" : "white",
                color: mode==="dark" ? "white" : "black",
                
               }
                // fontStyle: styles?.isItalic && "italic",
                // fontWeight: styles?.isBold && "bold",
                // textDecoration: styles?.isUnderline && "underline"
            }
                className="form-control" id="myText" placeholder='Enter text here' value={text} rows="8" onChange={onChange}></textarea>
            <div className='container-text' >
                <button className="btn btn-primary mt-3 " onClick={upperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mt-3 " onClick={lowerCase}>Convert to Lower</button>
                <button className="btn btn-primary mt-3 " onClick={clear}>Clear Text</button>
                <button className="btn btn-primary mt-3 " onClick={extraSpace}>Remove Extra Spaces</button>

                {/* <button className="btn btn-primary mt-3 " onClick={italic}><FontAwesomeIcon icon={faItalic} /></button> */}
            </div>
            <div className='preview' style={{color: mode === "dark" ? "white" : "black"}}>
                <p>Words: {text.length > 0 ? text.trim().split(/\s+/).length : 0}, Characters: {text.length}</p>
                <p>Estimated Read: {eta} minutes. </p>
           <hr/>
             <h3>Preview</h3>
                {text.length === 0 ?
                <p style={{border:"none", }}>Enter text above to preview</p>
                 :
                 
                <p style={{
                   
                    border: mode==="dark" ? "2px solid white" : "2px solid black",
                    padding: "10px"
                }}>{text }</p>
            }
          
             
            </div>

        </div>
    )
}

TextFrom.propTypes = {
    heading:PropTypes.string,
    mode:PropTypes.string,
} 

export default TextFrom