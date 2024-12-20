import data from "../../page/Auth/data/user";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRef, useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useEffect } from "react";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40em',
    bgcolor: 'white',
    borderRadius : '0.5em',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    p: '1em 1.5em 1em 1.5em',
    // maxHeight: '15em',
    // overflowY: 'overlay'
};



export default function UserModal(props){

    const {reference,edition,comiteDirection , redacteur} = props;
    const [selectedValues , setSelectedValues] = useState([]);



    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const refCheckBox = useRef();

    const handleCheckboxChange = (event) => {
        const { checked, value } = event.target;

        const updatedValues = checked
            ? [...selectedValues, value]
            : selectedValues.filter(item => item !== value);

        setSelectedValues(updatedValues);

        // Update the innerHTML or textContent of the ref
        if (reference && reference.current) {
            reference.current.textContent = updatedValues.join(', ');
        }
    };


    // Ovaina rehefa token vrai
    const userToken = JSON.parse(localStorage.getItem('userToken'));

    const filteredData = data.filter(item => {
        
        if (item.matricule === userToken.matricule) return false;
        
        if (comiteDirection) return item.commite_direction;
        return true;
    });

    useEffect(() => {
        if (edition && redacteur && userToken) {
            const userName = `${userToken.prenom} ${userToken.nom}`;
            setSelectedValues((prevValues) => (
                prevValues.includes(userName) ? prevValues : [...prevValues, userName]
            ));
        }
    }, [redacteur, userToken]);

    return(
        <>
            <div className='valeur-champ'>
                <span className='span-value' ref={reference}>{selectedValues.join(', ')}</span> 
                {edition ? (
                    <span className='span-arrow iso' onClick={handleOpen}><KeyboardArrowDownIcon fontSize='small'  style={{fontWeight:900}}/></span>
                ):(
                    <></>
                )}
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description" >
                <Box sx={style}>
                        <div>
                            
                            <form style={{fontSize:'13px',marginTop:'5px'}} >

                                {filteredData.map((item,index) => (
                                    <div className='choice_checkbox' key={index} ref={refCheckBox} style={{display:'flex'}}>
                                        <input type='checkbox' name="value[]" value={`${item.prenom} ${item.nom}`} id={item.matricule} checked={selectedValues.includes(`${item.prenom} ${item.nom}`)} onChange={handleCheckboxChange}/>
                                        <label htmlFor={item.matricule} style={{marginLeft:'15px'}}>
                                            <div className="list-choice-user">
                                                <span className="list-choice-user-name">{item.prenom} {item.nom} </span>
                                                <span className="list-choice-user-place">{item.lieu}</span>
                                                <span className="list-choice-user-poste">{item.fonction_poste}</span>
                                                <span className="list-choice-user-service">{item.service}</span>
                                            </div>
                                        </label>
                                    </div>
                                ))}

                                <div className='choice_button' style={{marginTop:'15px',display:'flex',justifyContent:'end'}}>
                                    <Button onClick={handleClose} size='small' variant="contained" style={{boxShadow:'none'}}><span style={{textTransform:'none',fontSize:'12px',fontFamily:'Lato',padding:'2px 14px 2px 14px'}}>Valider</span></Button>
                                </div>
                                
                            </form>
                        </div>
                </Box>
            
            </Modal>
        </>
    );
}