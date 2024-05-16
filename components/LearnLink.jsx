import Link from "next/link";

const LearnLink = ()=>{
    const id = 2;

    return (
        <>
        <Link href="/admin/profile">Go to admin profile</Link> <br /> <br />
        <Link href="/admin/dashboard">Go to admin dashboard</Link> <br /> <br />
        <Link href={`/users/profile/${id}`}>Go to 2nd user</Link>
        </>
    )
};

export default LearnLink;