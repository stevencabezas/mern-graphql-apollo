import { useParams, Link } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from '../graphql/projects'
import { TaskList } from "../components/tasks/TaskList";
import { TaskForm } from "../components/tasks/TaskForm";

export function ProjectDetails() {

    const params = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: {
            id: params.id
        }
    });

    console.log(data)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>

            <Link to='/projects'>
                <button className="bg-sky-900 text-white px-3 py-2 rounded-md mb-2">Back</button>
            </Link>

            <div className="bg-zinc-900 mb-2 p-10 flex justify-between rounded-lg">
                <div>
                    <h1 className="text-2xl">{data.project.name}</h1>
                    <p>{data.project.description}</p>
                </div>
            </div>
            <button className="bg-red-500 px-3 py-2 rounded-md mb-2">Delete</button>
            <TaskForm />
            <TaskList tasks={data.project.tasks} />
        </div>
    )
}