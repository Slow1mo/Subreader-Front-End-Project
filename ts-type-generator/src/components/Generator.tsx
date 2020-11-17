import React, {useState} from 'react';
import AddButton from './AddButton'

const Generator = () => {
    const [name, setName] = useState<string>("");
    const [type, setType] = useState<string>("");
  
    const result = () => {
        if (type === 'String') {
            console.log('type ' + {name} + "= string")
        }
        if(type === 'Number') {
            console.log('type ' + {name} + "= number")
        }
        if(type === 'Array') {
            console.log(`type ${name} = Array<${type}>`) // plus callback or call of new function
        }
        if(type === 'Object') {
            console.log(`type ${name} = {

            }`) //plus callback or call of new function
        }
    }
    console.log(result);

  return (
    <div className="generator">
        <form>
            <label>
                Name:
                <input value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    setName(e.currentTarget.value)}} />
            </label>
            <label>
                Type:
                <select value={type} onChange={(e: React.FormEvent<HTMLSelectElement>) => {
                    setType(e.currentTarget.value)}} >           
                    <option value="String">String</option>
                    <option value="Number">Number</option>
                    <option value="Array">Array</option>
                    <option value="Object">Object</option>
                </select>
            </label>
        </form> 
        <AddButton type={type} />
        <div className="print">
            {result}
        </div>
    </div>
  );
}

export default Generator;
