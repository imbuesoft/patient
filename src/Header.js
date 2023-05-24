import './Table.css';

const Header = (props) => (
    <>
        <table className='table-header'>
            <tr>
                <td style={{ width: '34%' }}>
                    <table>
                        <tr><td style={{ fontSize: '20px', fontWeight: 'bold' }}>{props.name}</td></tr>
                        <tr><td style={{ fontSize: '12px', color: 'rgb(39, 39, 39)', fontWeight: '600' }}>Age : 21 Years</td>
                            <td rowSpan={4} ><img src='https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg' height={'60px'} ></img></td>
                        </tr>
                        <tr><td style={{ fontSize: '12px', color: 'rgb(39, 39, 39)', fontWeight: '600' }}>Sex : Male</td></tr>
                        <tr><td style={{ fontSize: '12px', color: 'rgb(39, 39, 39)', fontWeight: '600' }}>PID : 555</td></tr>
                    </table>
                </td>

                <td style={{ fontSize: '13px', width: '36%' }} className='header-cell'>
                    <table style={{ marginLeft: '15px' }}>
                        <tr><td><b>Sample Collected At :</b></td></tr>
                        <tr><td>125, Shivam Bungalow, SG Road, Ahmadabad</td></tr>
                        <tr><td>Ref. By : <span><b>Dr.Hiren Shah</b></span></td></tr>
                    </table>
                </td>

                <td style={{ fontSize: '11px', width: '30%' }} className='header-cell'>
                    <table style={{ textAlign: 'right', width: "100%" }}>
                        <tr><th>Registered on :</th></tr>
                        <tr><td>02:31 PM 02 Dec, 21</td></tr>
                        <tr><th>Collected on :</th></tr>
                        <tr><td>03:11 PM 02 Dec, 21</td></tr>
                        <tr><th>Reported on :</th></tr>
                        <tr><td>04:35 PM 02 Dec, 21</td></tr>
                    </table>
                </td>
            </tr>

            <tr>
                <td colSpan={3}><hr></hr></td>
            </tr>
        </table>
    </>
);
export default Header;