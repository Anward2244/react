import Carousel from 'react-bootstrap/Carousel';

function CustomCorousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img style={{width:'100%', height:'500px'}} src="https://images.unsplash.com/photo-1603486002664-a7319421e133?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8MTYlM0E5fGVufDB8fDB8fHww" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%', height:'500px'}} src="https://images.pexels.com/photos/18296931/pexels-photo-18296931.jpeg?cs=srgb&dl=pexels-gokhan-sirkeci-676467750-18296931.jpg&fm=jpg" text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:'100%', height:'500px'}} src="https://images.unsplash.com/photo-1626593261859-4fe4865d8cb1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8MTYlM0E5fGVufDB8fDB8fHww" text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCorousel;