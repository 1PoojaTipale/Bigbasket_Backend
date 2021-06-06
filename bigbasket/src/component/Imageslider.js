import {Carousel} from 'react-bootstrap';

import ImgAAA from '../Images/AAA.jpg';
import ImgBBB from '../Images/BBB.jpg';
import ImgCCC from '../Images/CCC.jpg';

function Imageslider(){
    return(
        <div>
<Carousel>
  <Carousel.Item>
    <img
    height="400"
      className="d-block w-100"
      src={ImgAAA}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Tomatoes</h3>
      <p>Tomatoes are an excellent source of vitamin C and other antioxidants.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
        height="400"
      className="d-block w-100"
      src={ImgBBB}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      height="400"
      className="d-block w-100"
      src={ImgCCC}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}
export default Imageslider;