const fetchData = async ()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok){
            throw new Error("something went wrong");
        };
        return response.json();
    } catch (error) {
        console.log(error);
    }
};


const LearnDataFetching = async ()=>{
const result = await fetchData();

    return (
        <>
        <h1>learn data fetching</h1>
        {
          result ?  result.map((value)=>(
            <h1 key={value.id}>{value.title}</h1>
        )) : <h1>result not found</h1> 
        }
        </>
    )
};

export default LearnDataFetching;