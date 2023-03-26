import React, { Component } from 'react'

class Slider extends Component {
    render() {
        return (
            < >
                <div id="slider" style={{ overflow: 'hidden', width: "400%", position: "abslute", animation: "9s slider infinite" }}>
                    <img style={{ width: "1250px", height: "600px", float: "left", objectFit: "cover" }} src="https://i.postimg.cc/QMn15hjn/peakpx.jpg" alt='imge1' class="mySlides w3-animate-top" />
                    <img style={{ width: "1250px", height: "600px", float: "left", objectFit: "contant" }} src="https://static.dw.com/image/64258094_1005.jpg" />
                    <img style={{ width: "1250px", height: "600px", float: "left", objectFit: "cover" }} src="https://media.cnn.com/api/v1/images/stellar/prod/221118121043-03-cristiano-ronaldo-manchester-united.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp" alt='imge3' />
                    <img style={{ width: "1200px", height: "600px", float: "left", objectFit: "cover" }} src="https://media.gq-magazine.co.uk/photos/5d139f7b003d75649cae6ad5/16:9/w_1280,c_limit/Ronaldo-GQ-23nov17_GettyImages875941708.jpg" alt='imge4' />


                </div>



            </>

        );
    }

}


export default Slider;