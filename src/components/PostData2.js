import dbConnection from "@/lib/dbConnection";
import User from "@/model/user";

const create = async (formData)=>{
    "use server"
    await dbConnection();
    const result = await User.create({
        name : formData.get("name"),
        email : formData.get("email")
    });
    console.log("Data created", result);
};


const PostData2 = async ()=>{
    return (
        <>
        <form action={create}>
            <input type="text" name="name" /> <br /> <br />
            <input type="email" name="email" /> <br /> <br />
            <button>Submit the from</button> <br /> <br />
        </form>
        </>
    )
};

export default PostData2;