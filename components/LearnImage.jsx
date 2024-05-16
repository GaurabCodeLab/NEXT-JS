import Image from "next/image";
import photo from "../public/images/gaurab.jpg";

const LearnImage = ()=>{
    return (
        <>
        <h1>Learn Image in next js</h1>
        <Image src={photo} alt="gaurab image" height={200} width={400} />
        </>
    )
};

export default LearnImage;