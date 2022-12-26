import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import './style.css';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Admin = () => {
    const [isAutheticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (password === "password") {
            setIsAuthenticated(true);
        }
    }, [password]);

    if (!isAutheticated) {
        return (
            <Modal
                isOpen
                style={customStyles}
            >
                Password:
                <input
                    type="password"
                    value ={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    autoFocus
                />
            </Modal>
        )
    }

    return (
        <div>
        </div>
    );
};

export default Admin;
