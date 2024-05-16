"use client"
import { useRouter } from "next/navigation";

const LearnUseRouter = ()=>{
const router = useRouter();
console.log(router);

    return (
        <>
        <h1>useRouter component</h1>
        <button onClick={()=>router.push("/admin/dashboard")}>Click me to go to admin dashboard</button> <br /> <br />
        <button onClick={()=>router.push("/admin/profile")}>Click me to go to admin profile</button>
        </>
    )
};

export default LearnUseRouter;