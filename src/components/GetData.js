const fetchData = async ()=>{
    try {
        const response = await fetch("http://localhost:3000/api");
        if(!response.ok){
            throw new Error("Something went wrong");
        };
        const result = await response.json();
        return result;
    } catch (error) {
        console.log("Error in fetching data", error);
    }
};

const GetData = async ()=>{
    const users = await fetchData();
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
                    users.data.map((user)=>(
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

export default GetData;