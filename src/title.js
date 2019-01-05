'use strict'

import React from 'react'

const Title = (props) => (
    <h1>Olá {`${props.name} ${props.lastname}`}</h1>
)

Title.defaultProps =  {
        name: 'Desconhecido',
        lastname: 'Sem sobrenome'
}


// const Title = React.createClass({
//     getDefaultProps() {
//         return {
//             name: 'Desconhecido',
//             lastname:'Sem sobrnome'
//         }
//     },
//     render() {
//         return (
//             <h1>Olá {
//                 this.props.name + ' ' + this.props.lastname}</h1>
//         )
//     }
// })

export default Title