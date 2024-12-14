import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Put() {

    const [name, setname] = useState('')
    const [course, setcourse] = useState('')
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://frontandback-etvq.onrender.com/get/${id}`)
            .then((res) => {
                setname(res.data.Name)
                setcourse(res.data.Course)
            })
            .catch(err => { console.log(err) })
    })

    function handleupdate() {
        axios.put(`https://frontandback-etvq.onrender.com/update/${id}`, { Name: name, Course: course })
            .then(() => {
                alert('successfully updated')
                window.location = '/'
            })
            .catch(err => { console.log(err) })

    }
    return (
        <div className="container">
            <div className="bg-warning m-5 p-5">

                <input type="text" className="form-control mb-3" placeholder="enter ur name" value={name} onChange={(e) => setname(e.target.value)} />
                <input type="text" className="form-control mb-3"  placeholder="enter ur course" value={course} onChange={(e) => setcourse(e.target.value)} />
                <button className="btn btn-danger mb-3"  onClick={handleupdate}>send</button>
            </div>

        </div>
    )
}
