import { useEffect, useState } from "react";
import AllUsers from "./AllUsers";
import ChatDetails from "./ChatDetails";
import SearchBar from "./SearchBar";

const ParentComponent = () => {
    const [allUsersData, setAllUsersData] = useState([]);
    const [selectedUserData, setSelectedUserData] = useState(null);

    useEffect(() => {
        console.log(selectedUserData)
    }, [selectedUserData]);

    const handleFetchUser = async () => {
        const data = await fetch('https://my-json-server.typicode.com/codebuds-fk/chat/chats');
        const results = await data.json();
        setAllUsersData(results);
        console.log(results)
    }
    useEffect(() => {
        handleFetchUser();
    }, []);
  return (<>
   <section className={selectedUserData ? 'allUsersAvailable common' : 'noUserAvailable common'}>
    <h2 style={{'marginLeft': '12px'}}>Filter by Title / Order ID</h2>
    <SearchBar/>
    <AllUsers allUsersData={allUsersData} setSelectedUserData={setSelectedUserData}/>
   </section>
   {selectedUserData && <section className="allUsersChatDetails">
    <ChatDetails selectedUserData={selectedUserData}/>
   </section>}
   </>)
}

export default ParentComponent;