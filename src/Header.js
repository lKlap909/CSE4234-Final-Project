import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import style from './Style';



function Header() {
    const classes = createUseStyles(style)();
    const [dataBase, setDataBase] = useState({
        status: false,
        size: 0
    });
    function populateDB() {
      console.log("Button clicked!")
      try {
          fetch('http://localhost:8080/populateDB', {
              method: 'POST'
          }).then((response) => (
            response.json()
          )).then((data) => {
            if (data.success) {
                setDataBase({
                    status: true,
                    size: data.amount
                });
                console.log('yep');
                console.log(data.amount);
              } else {
                console.log('oops');
                console.log(data);
              }
          })
      } catch (error) {
          console.log("Error:", error);
      }
    }

    return (
        <div className={classes.mainHeader}>
            {
                dataBase.status ? <p>{dataBase.size}</p> :
                <a className={classes.headerItem} onClick={populateDB}>
                    Populate DB
                </a>
            }
            
        </div>
    );
}

export default Header;
