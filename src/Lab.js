import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Report from './Report';
import './Table.css';

const Lab = () => (
  <>
    <table className='main'>
      <tr><td>
        <Header name={"Bhargav Padhiyar"} />
        {/* <Body editable={true} /> */}
        <Report editable={true} />
        <Footer />
      </td></tr>
    </table>
  </>
);
export default Lab;