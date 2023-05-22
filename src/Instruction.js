import instruction from './instructiondata.json';

const Instruction = (props) => (
    
    <table style={{paddingTop:'20px'}}>
    {
      instruction.map((i) =>{
        return(
          <tr>
            <td><strong>{i.title} </strong></td>
            <td> : </td>
            <td> {i.text}</td>
          </tr>
        )
      })
    }    
    </table>    
    
);
export default Instruction;