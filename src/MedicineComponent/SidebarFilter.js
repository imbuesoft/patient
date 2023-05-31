import React from 'react'

const SidebarFilter = (props) => {
    //console.log(props.category)
    return (
        <div>
            <ul class="list-group">
                {
                    props.categories.map((item, index) => {
                        return <li key={index} className={'list-group-item ' + ((props.category === item) ? 'active' : '')} onClick={() => props.setCategory(item)}>{item}</li>
                    })
                }
            </ul>
        </div >
    )
}

export default SidebarFilter