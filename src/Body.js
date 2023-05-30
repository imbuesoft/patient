export default function Body(){
    return(
        <>
            <div class="container">
                <div class="row">
                    <div class="col-7">
                    <form className="d-flex">
                        <input className="form-control" type="search" placeholder="Rajkot" aria-label="Search"/>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                    </div>
                    
                    <div class="col">
                    Column
                    </div>
                </div>
            </div>
        </>
    );
}