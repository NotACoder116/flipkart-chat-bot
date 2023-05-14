import React from 'react'
import './ChatDetails.css';
import sendIconImg from './../assets/send-icon.png'

export default function ChatDetails({ selectedUserData }) {
    const messageList = selectedUserData.messageList.length ? selectedUserData.messageList : [];
    return <div className="chatDetailsContainer">
        <heading className="chatDetailsHeading">
            <img class="detailsHeadingImg" src={selectedUserData.imageURL} alt="product" />
            <h2 className="chatDetailsTitle">{selectedUserData.title}</h2>
        </heading>
        <div className={messageList?.length ? 'allChats' : 'noChats'}>
            {messageList?.length ? messageList.map(eachMessage => {
                return <div key={eachMessage.messageId} className={eachMessage.sender === "BOT" ? 'text-left flex-direction-column message' : 'text-right message'}>
                    <p className={eachMessage.sender === "BOT" ? `pd-20 brdr-btm` : 'pd-20'}>{eachMessage.message}</p>
                    {eachMessage?.options && eachMessage?.options.map(eachOption => {
                        return <div className="BOT pd-20 color-blue">
                            <p className={eachOption?.optionSubText ? 'pd-btm-10' : ''}>{eachOption?.optionText}</p>
                            <span className='color-grey'>{eachOption?.optionSubText}</span>
                            </div>
                    })}
                </div>
            }) : <p>Send a message to start chatting</p>}
        </div>
        <footer>
            <input type="text" className="chatDetailsInput" placeholder="Type a Message..." />
            <img className="sendIcon" src={sendIconImg} alt="sendIcon" />
        </footer>
    </div>
}
