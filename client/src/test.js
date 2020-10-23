import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {

    componentDidMount() {
        this.renderMap()
        this.getVenues()
      }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD1DrDBUd6GNL2EIBCxK-K0OjkTny8kbuA&callback=initMap")
        window.initMap = this.initMap
      }

      getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
          client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
          client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
          query: "Campus",
          near: "Chennai",
          v: "20182507"
        }
      

      axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
          console.log(response.data.response.groups[0].items)
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      }) 

    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 12.8231, lng: 80.0442},
            zoom: 8
          })
    }
  }
    render() {
        return (
          <main>
            <div id="map"></div>
          </main>
        )
      }
    }

    function loadScript(url) {
        var index  = window.document.getElementsByTagName("script")[0]
        var script = window.document.createElement("script")
        script.src = url
        script.async = true
        script.defer = true
        index.parentNode.insertBefore(script, index)
      }

export default App;