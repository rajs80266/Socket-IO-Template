import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Route, Switch } from "react-router-dom";

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
        if (password === "k-collections") {
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
        <Switch>
          {/* <Route
            exact
            path="/admin/manageProducts"
            render={() => <ManageProducts />}
          /> */}
        </Switch>
    );
};

export default Admin;
