import React, { Component } from 'react'
import './map.css'
import axios from 'axios'

class App extends Component {

    componentDidMount() {
        this.renderMap()
      }
//Please enter your API key below to view the map
    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key&callback=initMap")
        window.initMap = this.initMap
      }
// Please enter your client_id and client_secret
      getVenues = () => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?"
        const parameters = {
          client_id: "",
          client_secret: "",
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
    }
    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 12.8231, lng: 80.0442},
            zoom: 8
          })

          var marker = new window.google.maps.Marker({
            position: {lat: 12.8231, lng: 80.0442},
           map:map,
           title: 'GFG Student Chapter'
          })
        
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

export default Map;