import React, {useState, useEffect} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CustomerCard from '../../components/CustomerCard'
import TemplatePage from '../../templates/Page'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      margin: theme.spacing(2),
    },
  }));

const CustomersList = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [customers, setCustomers] = useState([])
    
    
    useEffect(() => {
        axios.get('https://reqres.in/api/users')
        .then(response => {
            const { data } = response.data
            setCustomers(data)
        })
    }, [])
      
    const onRemoveCustomer = id => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() => {

            const newCustomersState = customers.filter( customer => customer.id !== id)
            
            setCustomers(newCustomersState)
        })
    }

    const handleEditCustomer = id => {
        navigate(`/customers/edit/${id}`)
    }

    return (
        <>
            <TemplatePage title='Clientes' />
                
              
            <Grid container>
            {
                customers.map(item => ( 
                    <Grid item xs={12} md={4}>
                        <CustomerCard
                            id={item.id}  
                            firstName={item.first_name}
                            lastName={item.last_name}
                            email={item.email}
                            avatar={item.avatar}
                            className={classes.card}
                            onRemoveCustomer={onRemoveCustomer}
                            onEditCustomer={handleEditCustomer}

                        />
                    </Grid>     
                ))
            }
            </Grid>
        </>
    )
}

export default CustomersList