import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fakeData1 from '../fakeData2.json';
// import fakeData from "../data.json";
import RoomInfo from './RoomInfo';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import { BookingInfoContext } from '../../App';

const Room = () => {
  const [booking,setBooking] = useContext(BookingInfoContext);
  console.log(booking,'this is booking');
    // const roomId = fakeData1.filter( fd => fd.id ==  booking.checkId.id);
    return (
      <>
   {/* <Container>
    <Row>
      <Col style={{ minWidth:'60%',maxWidth:'62%'}} xs={6}>
               {
                  roomId.map(pd => <RoomInfo roomElement={pd}></RoomInfo>)
                }
                </Col>
                <Col>
              <GoogleMaps
                // google={this.GoogleMaps}
                center={{lat: 18.5204, lng: 73.8567}}
                height='100px'
                zoom={15}
                // center={{ lat: 44.076613, lng: -98.362239833 }}
                // zoom={5}
              />
          </Col>
        </Row>
      </Container> */}
      <p style={{color:'cyan'}}>this is Room Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi praesentium nobis nam harum nisi corrupti itaque optio. Accusantium, deserunt repellendus quas explicabo ducimus nulla facere earum, reiciendis, ipsum dolores cupiditate!</p>
      </>
    );
};

export default Room;