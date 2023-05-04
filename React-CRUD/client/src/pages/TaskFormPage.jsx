import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast'

export function TaskFormPage() {
    const {register, handleSubmit, formState:{errors}, setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async (data)=> {
        if (params.id) {
            await updateTask(params.id,data);
            toast.success('Tarea actualizada', {position: 'top-center', style: {
                background:'#10BB2D',
                color: '#fff'
            }})
        } else {
            await createTask(data);
            toast.success('Tarea creada', {position: 'top-center', style: {
                background:'#10BB2D',
                color: '#fff'
            }})
        }
        navigate('/tasks') 
    });
    
    useEffect(() => {
        async function loadTask(){
        if (params.id) {
           const res =  await getTask(params.id);
           setValue('title',res.data.title)
           setValue('description',res.data.description)
        }
       }
       loadTask()
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" 
                {...register('title', {required: true} )} placeholder="title" className='bg-teal-200 p-3 rounded-lg block w-full mb-3'/>
                {errors.title && <span>title field is required</span>}
                <textarea rows="3" 
                 {...register('description', {required: true})} placeholder="Description" className='bg-teal-200 p-3 rounded-lg block w-full mb-3 '></textarea>
                 {errors.title && <span>Description field is required</span>}
                <button className='bg-indigo-200 p-3 rounded-lg block w-full mt-3 '>Save</button>
            </form>
        {params.id && <div className='flex justify-end'><button
        className='bg-red-300 p-3 rounded-lg block w-48 mt-3 '
        onClick={async ()=>{
            const acepted = window.confirm('are you sure?')
            if (acepted){
                await deleteTask(params.id);
                toast.success('Tarea eliminada', {position: 'top-center', style: {
                    background:'#10BB2D',
                    color: '#fff'
                }})
                navigate('/tasks');
            }
        }}
        >Delete</button></div>}
        
        </div>
    )
}