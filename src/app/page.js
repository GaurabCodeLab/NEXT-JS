const fetchData = async ()=>{
  try {
    const response = await fetch("http://localhost:3000/api/users");
    if(!response.ok){
      throw new Error("Something went wrong");
    };
    return response.json();
  } catch (error) {
    console.log(error);
  }

}

const Home = async ()=>{
  const users = await fetchData();

  return(
    <>
    <h1 className="hed">Hello next js</h1>
    {
    users.data.map((user)=>(
      <h3 key={user.id}>{user.name}</h3>
    ))
    }
    </>
  )
};

export default Home;