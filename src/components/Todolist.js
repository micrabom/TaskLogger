import React, {useState} from 'react'


const Todolist = () => {
    const [state, setState] = useState ({
        todo: '',
        Todolist: []
    })

const { todo, todolist} = state

/** Create */

    return(
        <>
        <div className='todolist-main'>
            <div className='form-wrapper'>
                <input type="text" placeholder='Create todolist'/>
                <button>ADD</button>
            </div>
            <div className='table-main'>
                <div className='header-wrapper'>
                    <span>To do</span>
                    <span>Action</span>
                </div>
                <div className='row-wrapper'>
                    <span>Do my homework</span>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
                <div>
                    {
                        todolist.length ?
                        todolist.map((value,index) => {
                            return (
                            (<div className='row-wrapper'>
                                <span>Do my homework asddasdasdasas</span>
                                <button>EDIT</button>
                                <button>DELETE</button>
                            </div>))

                    }) : <span>No record found</span>
                }
                </div>
                
            </div>
        </div>
        </>
    )
}

export default Todolist