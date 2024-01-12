import { useState } from "react"

export function CreateTodo() {


    //react-query
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input type="text" style={{
            padding: 10,
            margin: 10}
        }   placeholder="title" onChange={function(e){
            const value= e.target.value;
            setTitle(e.target.value);
        }}></input> <br />
        <input type="text" style={{
            padding: 10,
            margin: 10}
        }   placeholder="description" onChange={function(e){
            const value= e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10}} onClick={()=>{
                fetch("http://localhost:3000",{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),headers:{
                        "contentType" : "application/json"
                    }
                })
            }}>Add a Todo</button>
    </div>
}