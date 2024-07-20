import { useImperativeHandle, forwardRef, useState } from "react";
import "./Modal.css"
const ModalShow = ({modal}) => {
    const [open, setOpen] = useState(false);
    console.log(open)
    
    useImperativeHandle(modal, () => {
        return {
            toggleModal: () => {
                setOpen(!open)
            }
        }
    })
}

export default forwardRef(ModalShow)