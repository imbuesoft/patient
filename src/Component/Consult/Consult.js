import React from 'react';
import style from './Consult.module.css';

const Consult = () => {
    return (
        <div className={`mt-5 container-fluid ${style.mainDiv}`}>
            <div className={style.firstfold}>
                <div className={style.pink}>
                    <section className={style.firstfoldwrap}>
                        <div className={style.content}>
                            <div className={style.heading} id='pinkheading'>
                                Skip the travel!
                                <br />
                                <h4>Take Online Doctor Consultation</h4>
                            </div>
                            <p className={style.desc} id='pinksub'>
                                Private consultation + Audio call · Starts at just <span className='rupees_symbol'>₹</span>199
                            </p>
                            <article className={style.cardstrip}>
                                <div className={style.docimg}>
                                    <span className={style.eachimg} style={{ zIndex: 4 }}>
                                        <img
                                            className={style.doc}
                                            src='https://images1-fabric.practo.com/dr-milind-kulkarni-1484306142-5878b6de533af.jpg/thumbnail'
                                            alt=''
                                        />
                                    </span>
                                    <span className={style.eachimg} style={{ zIndex: 3 }}>
                                        <img
                                            className={style.doc}
                                            src='https://s3-ap-southeast-1.amazonaws.com/practo-fabric/dr-sidharth-verma-1482421214-585bf3deb1bf3.jpg/thumbnail'
                                            alt=''
                                        />
                                    </span>
                                    <span className={style.eachimg} style={{ zIndex: 2 }}>
                                        <img
                                            className={style.doc}
                                            src='https://s3-ap-southeast-1.amazonaws.com/practo-fabric/dr-pankaj-kumar-1475218773-57ee0d55b4559.jpg/thumbnail'
                                            alt=''
                                        />
                                    </span>
                                    <span
                                        className={style.eachimgcount}
                                        id='active'
                                        style={{
                                            transform: 'translateX(-30px)',
                                            zIndex: 1,
                                            marginLeft: '15px'
                                        }}
                                    >
                                        +108 doctors online <span className={style.pulse} />
                                    </span>
                                </div>
                            </article>
                            {/* <a href="/doctor" className={style.consultnow}>
              Consult now
            </a> */}
                            <a className={style.consult_now} href='/consult-doctor'>
                                Consult now
                            </a>
                        </div>
                        <img
                            className={style.banner}
                            id='pinkbanner'
                            src='https://www.practo.com/consult/static/images/homepage-hero-image-web-v1.png'
                            alt=''
                        />
                        <div className={style.add} id='add'>
                            <img
                                src='https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-award-business-kiranshastry-lineal-kiranshastry.png'
                                alt='a'
                                style={{ width: '20px', height: '20px', marginRight: '5px' }}
                            />
                            <p className="mt-2">Verified Doctors</p>
                            <img
                                src='https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-prescription-medical-healthcare-those-icons-lineal-color-those-icons.png'
                                alt='p'
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '5px',
                                    marginLeft: '5px'
                                }}
                            />
                            <p  className='mt-2'>Digital Prescription</p>
                            <img
                                src='https://img.icons8.com/windows/32/000000/chat-message.png'
                                alt='m'
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginRight: '5px',
                                    marginLeft: '5px'
                                }}
                            />
                            <p className='mt-2'>Free Followup</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Consult;
