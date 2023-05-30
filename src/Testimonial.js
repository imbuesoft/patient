import React from 'react'
import "./style.css";

const Testimonial = () => {
    return (
        <>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <button
                    className="carousel-control-prev"
                    type="button"
                    id="btn"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <div className="carousel-inner">
                    <h1>What our users have to say</h1>
                    <div className="carousel-item active">
                        <p>
                            {" "}
                            Very good app. Well thought out about <br />
                            booking/rescheduling/canceling an appoinment.Also
                            <br /> Doctor's feedback mechanisum is good and describes all
                            <br /> the bascics in good way{" "}
                        </p>

                        <p className="p1">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            Avinash Sharma
                        </p>
                    </div>
                    <div className="carousel-item">
                        {/* <h1>What our users have to say</h1> */}
                        <p>
                            {" "}
                            Very easy to book,maintain history. Hassle free from <br />
                            older versions of booking appointment via telephone.. <br />
                            Thanks Practo for making it simple.{" "}
                        </p>{" "}
                        <p className="p1">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            Jyoti Bhatia
                        </p>
                    </div>
                    <div className="carousel-item">
                        {/* <h1>What our users have to say</h1> */}
                        <p>
                            {" "}
                            Very helpful. Far easier than doing same things on <br />{" "}
                            computer. Allows quick and easy search with speedy <br />
                            booking. Even maintains history of doctors visited.{" "}
                        </p>{" "}
                        <p className="p1">
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-person"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            Amit Sharma
                        </p>
                    </div>
                </div>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Testimonial