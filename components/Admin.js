// lib


// components
import React from 'react'
import { Table } from 'semantic-ui-react'

// other

class Admin extends React.Component {
  
        
        render() {
            var  data =this.props.giftData
            if(data) {
                console.log(data)
                return (
<div className="admin">
                    <h4>Admin</h4>

                <Table singleLine>
                <Table.Header>
                   <Table.Row>
                   <Table.HeaderCell>first Name</Table.HeaderCell>
                   <Table.HeaderCell>last Name</Table.HeaderCell>
                   <Table.HeaderCell>city</Table.HeaderCell>
                   <Table.HeaderCell>street and number </Table.HeaderCell>
                   <Table.HeaderCell>email</Table.HeaderCell>
                   <Table.HeaderCell>phoneNumber</Table.HeaderCell>
                   <Table.HeaderCell>zipCode</Table.HeaderCell>
                   </Table.Row>
                </Table.Header>
                <Table.Body>
                {data.map((data, key) => {
                   return (
                   <Table.Row key={key}>
                   <Table.Cell>{data.firstName}</Table.Cell>
                   <Table.Cell>{data.lastName}</Table.Cell>
                     <Table.Cell>{data.city}</Table.Cell>
                     <Table.Cell>{data.street}</Table.Cell>
                     <Table.Cell>{data.email}</Table.Cell>
                     <Table.Cell>{data.phoneNumber}</Table.Cell>
                     <Table.Cell>{data.zipCode}</Table.Cell>
                   </Table.Row>
                   )
                })}
                </Table.Body>
              </Table>
              </div>

                )


            }else{
                return <div>sdss</div>
            }
            
        }
    
    
    
    }
    
    export default Admin;