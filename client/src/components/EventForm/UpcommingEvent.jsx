import React from 'react'
import styled from 'styled-components'
import firebase from '../firebase'
import EventCard from './EventCard'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f4f4f4;
    box-sizing: border-box;
    padding-top: 2rem;
    h1{
        text-align: center;
        color: green;
    }
    .innerContainer{
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;
        margin: 3rem auto;
        
    }
    @media(max-width: 1100px) {
        width: 100%;
        h1{
            font-size: 2rem;
        }
        .innerContainer{
            grid-template-columns: 1fr 1fr;
            margin: 3rem auto;
            grid-gap: 1rem;            
        }
    }
    @media(max-width: 768px) {
        width: 100%;
        h1{
            font-size: 1.5rem;
        }
        .innerContainer{
            width: 90%;
            grid-template-columns: 1fr;
            margin: 3rem auto;
            grid-gap: 1rem;            
        }
    }
    
`



class UpcommingEvent extends React.Component {
    state = {
        events : null
    }

    componentDidMount() {

        // getting data from firestore
        // collection name :- events
        const db = firebase.firestore()
        db.collection("events").get()
            .then((snapShots) => {
                const events = []
                snapShots.forEach(( doc ) => {
                    const data = doc.data()
                    events.push(data)
                })
                // saved all the events in state
                this.setState({
                    events : events
                })
            })
            .catch((err) => {
                console.log(err)
            })


    }

    render() {
        return (
            <Container>
                <h1>Upcomming events</h1>
                <div className="innerContainer">
                    {
                        this.state.events &&
                        this.state.events.map((event, index) => {
                            return (
                                <EventCard 
                                    key = {index}
                                    eventName = {event.eventName}
                                    startDate = {event.startDate}
                                    eligiblity = {event.eligiblity}
                                    eventDis = {event.eventDis}
                                />
                            )
                        })
                    } 
                </div>
            </Container>
        )
    }
}

export default UpcommingEvent
