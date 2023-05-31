import React from 'react';

const FooterCard = ({ data = {
    key: Math.random(),
    title: "Provide data pls",
    list: [{ label: "Provide", link: "#" }, { label: "data", link: "#" }, { label: "pls", link: "#" }]
} }) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xxl-4" key={data?.key}>
                <div className="card footer-card">
                    <div className="card-body">
                        <h5 className="card-title text-start text-light">{data?.title}</h5>
                        <ul className="footer-card-ul">
                            {data?.list?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item?.link} target="_blank" rel="noopener noreferrer">
                                            {item?.label}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterCard;