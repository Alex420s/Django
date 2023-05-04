import { useNavigate } from "react-router-dom"

export function TaskCard({ task }) {
    const navigate = useNavigate();

    return (
    <div
        className="bg-sky-200 p-3 hover:bg-green-200 hover:cursor-pointer "
        onClick={()=> {
            navigate(`/tasks/${task.id}`);
        }}
    
    >
        <h1 className="font-bold uppercase text-indigo-800">{task.title}</h1>
        <p className="text-emerald-700">{task.description}</p>
        
    </div>)
}