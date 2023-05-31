export default function Scrollmenu(){
    const Categorys = ["Pain Relief","Respiratory & Allergies","Eye & Ear Care","Oral Care","Digestive Care","Foot & Leg Care","Skin & Scalp Care","Health Supplements","Sleep & Stress Relief","First Aid","Natural & Homeopathic","Baby Treatments","Medical Devices","Travel","Bladder, Genital & Rectal"];

    return(
        <>
        <div className="scrollmenu" style={{backgroundColor:"#434949"}}>
        {
            Categorys.map((Category,i) =>
                <button className='btn' style={{backgroundColor:"#434949", color:"white",fontSize:"14px"}}>{Category}</button>
            )
        }
        </div>
        </>
    );
}