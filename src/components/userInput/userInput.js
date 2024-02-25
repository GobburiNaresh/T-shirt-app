import './userInput.css';

function UserInput(){
    return(
        <form className="form-container">
            <div className="row-1">
            <label>T-Shirt Name:</label>
            <input type="text"/>
            <label>Description:</label>
            <input type="text"/>
            <label>Price:</label>
            <input type="text"/>
            </div>
            <div className="quantity-container">
                <div className="row-2">
                <label>Quantity Available:</label>
                <label>Large:</label>
                <input type="number"/>
                <label>Medium:</label>
                <input type="number"/>
                <label>Small:</label>
                <input type="number"/>
                </div> 
            </div>
            <button>Add Product</button>
        </form>
    )
}

export default UserInput;
