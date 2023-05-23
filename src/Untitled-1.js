<div className='container'>
        <form>
            <table>
                <tr>
                    <td>Patient Name</td>
                    <td><input type="text" name='patientName' required/></td>
                </tr>
                
                <tr>
                    <td>Gender</td>
                    <td><input type="radio" name="gender" value="Male"/>Male
                        <input type="radio" name="gender" value="Female"/>Female
                        <input type="radio" name="gender" value="Other"/>Other
                    </td>
                </tr>
                
                <tr>
                    <td>Age</td>
                    <td><input type="number" required/></td>
                </tr>

                <tr>
                    <td>Blood Group</td>
                    <td><input type="text" required/></td>
                </tr>

                <tr>
                    <td>Marital Status</td>
                    <td><select>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                            <option>Wclassowed</option>
                            <option>Separated</option>
                            <option>Other</option>
                        </select></td>
                </tr>
                <tr>
                    <td>Contact No</td>
                    <td><input type="text" maxlength={10} required/></td>
                </tr>
            </table>
        </form>
    </div>