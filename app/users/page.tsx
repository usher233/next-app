import React from 'react'

interface User {
    id: number;
    title: string;
}
const UsersPage = async () => {
    const users: User[] = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {cache: "no-store" }
    ).then(res => res.json()) //data cache for every 10 seconds


  return (
    <>
    <h1>Users</h1>
    <p>{new Date().toLocaleTimeString()}</p>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th className='font-bold'>ID</th>
          <th className='font-bold'>Title</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
           <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.title}</td>
           </tr>
           ))}
      </tbody>
    </table>
    </>
  )
}

export default UsersPage