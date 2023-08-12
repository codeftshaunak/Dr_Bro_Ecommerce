// import React from "react"
// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");


// const GoogleMapRender = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwaH2gfkDYyjQhJDLmEy4E09WIp-aY8tc",
//     loadingElement: <div style={{ height: `600px` }} />,
//     containerElement: <div style={{ height: `600px` }} />,
//     mapElement: <div style={{ height: `500px` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 27.1751, lng: 78.0421 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: 27.1751, lng: 78.0421 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

// class GoogleMapComp extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <GoogleMapRender
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }

// export default GoogleMapComp;

// import React from "react";
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

// const GoogleMapRender = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwaH2gfkDYyjQhJDLmEy4E09WIp-aY8tc",
//     loadingElement: <div style={{ height: `600px` }} />,
//     containerElement: <div style={{ height: `600px` }} />,
//     mapElement: <div style={{ height: `500px` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) => (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 27.1751, lng: 78.0421 }}
//   >
//     {props.isMarkerShown && (
//       <MarkerWithLabel
//         position={{ lat: 27.1751, lng: 78.0421 }}
//         labelAnchor={new window.google.maps.Point(0, 0)}
//         labelStyle={{ backgroundColor: "white", fontSize: "16px", padding: "5px" }}
//       >
//         <div>New Label</div>
//       </MarkerWithLabel>
//     )}
//   </GoogleMap>
// ));

// class GoogleMapComp extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker();
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true });
//     }, 3000);
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false });
//     this.delayedShowMarker();
//   }

//   render() {
//     return (
//       <GoogleMapRender
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     );
//   }
// }

// export default GoogleMapComp;

import React, { useState } from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const GoogleMapRender = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwaH2gfkDYyjQhJDLmEy4E09WIp-aY8tc",
    loadingElement: <div style={{ height: `600px` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `500px` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (

  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 27.1751, lng: 78.0421 }}
  >
    {props.isMarkerShown && (
      <MarkerWithLabel
        position={{ lat: 27.1751, lng: 78.0421 }}
        labelAnchor={new window.google.maps.Point(0, 0)}
        icon={{
          url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/f6c4c04a71e4178838760e00f1376d26-1688023874930/08b79df2-20cb-4bf1-bd88-ae18c9828248.png",
          scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
        }}
        labelStyle={{ backgroundColor: "white", fontSize: "16px", padding: "5px" }}
      >
        <div>New Label</div>
      </MarkerWithLabel>

    )}
  </GoogleMap>
));

class GoogleMapComp extends React.PureComponent {

  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }



  render() {
    return (
      <GoogleMapRender
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default GoogleMapComp;


// import React, { useState, useEffect } from "react";
// import { compose, withProps } from "recompose";
// import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import { BASE_URL } from "../../config";
// const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

// const GoogleMapRender = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwaH2gfkDYyjQhJDLmEy4E09WIp-aY8tc",
//     loadingElement: <div style={{ height: `600px` }} />,
//     containerElement: <div style={{ height: `600px` }} />,
//     mapElement: <div style={{ height: `500px` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) => (
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 27.1751, lng: 78.0421 }}
//   >
//     {props.markers?.map((marker, index) => {

//       return <MarkerWithLabel
//         key={index}
//         position={{ lat: marker.lat, lng: marker.long }}
//         labelAnchor={new window.google.maps.Point(0, 0)}
//         icon={{
//           url: marker.thumbnail,
//           scaledSize: new window.google.maps.Size(40, 40), // Adjust size as needed
//         }}
//         labelStyle={{ backgroundColor: "white", fontSize: "8px", padding: "5px" }}
//         onClick={() => {
//           props.onMarkerClick(index); // Call the parent's marker click handler with the index
//         }}
//       >
//         <div>{marker.title}</div>
//       </MarkerWithLabel>
//     })}
//   </GoogleMap>
// ));

// const GoogleMapComp = () => {
//   const [markers, setMarkers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/places/`);
//         const res = await response.json();
//         const data = res.results;
//         const formattedMarkers = data.map((item) => ({
//           lat: item.lat,
//           long: item.long,
//           thumbnail: item.thumbnail,
//           title: item.title,
//         }));

//         setMarkers(formattedMarkers);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);


//   return (
//     <GoogleMapRender markers={markers} />
//   );
// };

// export default GoogleMapComp;




