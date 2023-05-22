import './Table.css';

const Footer = () => (
    <table className='table-footer'>
        <tr>
            <td><span>Thanks for Reference</span></td>
            <td><span>**** End of Report ****</span></td>
            <td></td>
        </tr>
        <tr>
            <td><div className='pic'><img src='https://i.fonts2u.com/bs/bs-signature-demo_4.png'/></div></td>
            <td><div className='pic'><img src='https://i.fonts2u.com/bs/bs-signature-demo_4.png'/></div></td>
            <td><div className='pic'><img src='https://i.fonts2u.com/bs/bs-signature-demo_4.png'/></div></td>
        </tr>
        <tr>
            <td>Dr. Kavya Sharma<br/><span className='degree'>MD (Pathology)</span></td>
            <td>Dr. Sachin Patil<br/><span className='degree'>Pathologist</span></td>
            <td>Priyanka Patel <br/><span className='degree'>Lab Technician</span></td>
        </tr>
    </table>
);
export default Footer;