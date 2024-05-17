import dbConnection from "@/lib/dbConnection";
import User from "@/model/user";

const GetData2 = async ()=>{
    await dbConnection();
    const users = await User.find();
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>(
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    )
};

export default GetData2;