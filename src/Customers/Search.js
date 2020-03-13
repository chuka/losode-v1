import React from 'react'

const Search = ()=>{
    return(    
        <React.Fragment>
            <div className ='container-fluid'>
               <form>
                   <div className ='form-group'>
                    <label>
                        <input type ='text' placeholder ='Search'/>
                        <button className ='btn btn-primary'>Search</button>
                    </label>
                   </div>
               </form>
            </div>
        </React.Fragment>
    )
}
export default Search