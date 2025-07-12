
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

async function UsersServer(){
    // await new Promise((resolve) => setTimeout(resolve,2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return ( 
        <ul className="space-y-4 p-4">
            {users.map((user:User) =>(
                <li key={user.id} className="p-4 bg-white text-black rounded-lg">
                    {user.name} {user.email}
                </li>
            ))}
        </ul>
     );
}
 
export default UsersServer;