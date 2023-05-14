import './AllUsers.css';

const AllUsers = ({ allUsersData, setSelectedUserData }) => {
    return (
        <div className="allUsersContainer"> 
            {allUsersData.map(eachUser => {
                return <div key={eachUser.id} className="eachUser" onClick={() => setSelectedUserData(Object.keys(eachUser)?.length ? eachUser : null)}>
                    <img src={eachUser.imageURL} alt="product"/>
                    <div className="userProductIntro">
                        <div className="title-left">
                            <div>
                            <p>{eachUser.title}</p>
                            <h6>{eachUser.orderId}</h6>
                            </div>
                            <p>WHyyyyyyyyy</p>
                        </div>
                        <div>{eachUser.latestMessageTimestamp}</div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default AllUsers;