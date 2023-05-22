import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import './Table.css';

const Lab = () => (
    <>
    <table className='main'>
      <tr><td>
        <Header/>
        <Body editable={true}/>
        <Footer/>
      </td></tr>
    </table>
    </>
);
export default Lab;