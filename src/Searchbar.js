export default function Searchbar(){
    return(
        <>
        <div className="input-group mt-3">
            <input type="search" className="form-control" name="productSearch" placeholder='Enter Product Name'/>
            <button type="button" className="btn btn-primary"><i className="fas fa-search"></i></button>
        </div>
        </>
    );
}