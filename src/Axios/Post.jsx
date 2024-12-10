import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Post() {
    const [name, setname] = useState('')
    const [course, setcourse] = useState('')

    function handleclick() {
        const data = {
            Name: name,
            Course: course
        }
        axios.post('http://localhost:2300/create', data)
            .then(() => {
                alert('success')
            }).catch(console.log('err'))
    }

    //  get


    const [view, setview] = useState([])

    useEffect(() => {
        axios.get('http://localhost:2300/find')
            .then((res) => {
                setview(res.data)
            })
            .catch(console.log('err'))
    })

    return (
        <div className="container">
            <div className="bg-info p-5 m-5 ">


                <input type="text" className="form-control mb-3" placeholder="enter ur name" onChange={(e) => setname(e.target.value)} />
                <input type="text" className="form-control mb-3"  placeholder="enter ur course" onChange={(e) => setcourse(e.target.value)} />
                <button className="btn btn-danger mb-3"  onClick={handleclick}>send</button>
            </div>



            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.map((item) => {
                            return (
                                <tr>
                                    <td>{item.Name}</td>
                                    <td>{item.Course}</td>
                                    <td>
                                        <Link className="btn btn-danger" to={`/edit/${item._id}`}>update</Link>
                                        <button className="btn btn-success" onClick={() => {
                                            axios.delete(`http://localhost:2300/delete/${item._id}`)
                                                .then(alert('success'))
                                                .catch(console.log('err'))
                                        }}>delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div >
    )
}