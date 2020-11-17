import React, {useState} from 'react';


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
        <div className="print">
            {result}
        </div>
    </div>
  );
}

export default Generator;
