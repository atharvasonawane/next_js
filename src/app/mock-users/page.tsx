
import { revalidatePath } from "next/cache";

type MockUser = {
    name: string;
    id: number;
};

async function MockUsers() {
    const res = await fetch("https://68727b9f76a5723aacd4e2aa.mockapi.io/users");
    const users = await res.json();

    if (users) {
        console.log("FETCHED");
    }

async function addUser(formData: FormData){
    "use server"
    const name = formData.get("name");
    const res = await fetch("https://68727b9f76a5723aacd4e2aa.mockapi.io/users",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name}),
    });
    const newUser = await res.json();
    revalidatePath('/mock-users')
    console.log(newUser);

}


    return (
        <div className="py-10">

            <form action={addUser} className="mb-5">
                <input type="text" name="name" required className="border p-1.5 bg-amber-50 ml-2.5 text-black"/>
                <button type="submit" className="bg-blue-600 rounded px-4 py-2 ml-2">Add User</button>
            </form>

            <div className="grid grid-cols-4 gap-4 py-10">
                {users.map((user: MockUser) => (
                    <div
                        key={user.id}
                        className="p-4 bg-white rounded-lg text-black">
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MockUsers;