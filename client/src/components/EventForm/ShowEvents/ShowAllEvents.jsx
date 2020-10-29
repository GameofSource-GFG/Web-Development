import React from 'react'
import styled from 'styled-components'
import firebase from '../../firebase'
import ShowOneEvent from './ShowOneEvent'

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    h1{
        text-align: center;
        color: green;
    }
    .innerContainer{
        width: 80%;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 3rem;
        margin: 3rem auto;
        
    }
    @media(max-width: 1100px) {
        width: 100%;
        h1{
            font-size: 2rem;
        }
        .innerContainer{
            grid-template-columns: 1fr;
            margin: 3rem auto;
            grid-gap: 2rem;            
        }
    }
    @media(max-width: 768px) {
        margin: 0;
        right: 0;
        width: 100%;
        h1{
            font-size: 1.5rem;
        }
        .innerContainer{
            width: 90%;
            grid-template-columns: 1fr;
            margin: 3rem auto;
            grid-gap: 2rem;            
        }
    }
    
`



class ShowAllEvents extends React.Component {
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
                <h1>Upcomming Events</h1>
                <div className="innerContainer">
                    {
                        this.state.events &&
                        this.state.events.map((event, index) => {
                            return (
                                <ShowOneEvent
                                    key = {index}
                                    _id = {event.id}
                                    eventName = {event.eventName}
                                    startDate = {event.startDate}
                                    endDate = {event.endDate}
                                    address1 = {event.address1}
                                    address2 = {event.address2}
                                    city = {event.city}
                                    state = {event.state}
                                    country = {event.country}
                                    zipCode = {event.zipCode}
                                    eligiblity = {event.eligiblity}
                                    eventDis = {event.eventDis}
                                    sponsors = {event.sponsors}
                                    theme = {event.eventTheme}
                                />
                            )
                        })
                    } 
                </div>
            </Container>
        )
    }
}

export default ShowAllEvents
