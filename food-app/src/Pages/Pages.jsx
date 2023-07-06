import React from 'react'
import img1 from '../Assets/Pages/Img (6).jpg'
import img2 from '../Assets/Pages/Img (1).jpg'
import img3 from '../Assets/Pages/Img (7).jpg'
import img4 from '../Assets/Pages/Img (8).jpg'
import Fade from 'react-reveal'

const Pages = () => {
  return (
    <div className='pages'>
                <div className="pages-part2">
            <h1 className='pages-titre'>OUR SPECIALTIES</h1>
            <h1 className='pages-titre-dis'>Discover</h1>
            <div className="pages-photo">
                    <img src={img4} alt="" className='pages-photos'/>
                    <div className='pages-jus'>
                        <h2>Creamy Chicken Shashlik</h2>
                        <h2>With Vegetable</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing <br/>elit. Rerum omnis aspernatur eum nam, nostrum laboriosam <br/>
                        </p>
                        <span className='pages-price'>$17.00</span>
                    </div>
                    <img src={img2} alt="" className='pages-photos-one'/>
                    <div className='pages-jus'>
                        <h2>Creamy Chicken Shashlik</h2>
                        <h2>With Vegetable</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing <br/>elit. Rerum omnis aspernatur eum nam, nostrum laboriosam <br/>
                        </p>
                        <span className='pages-price'>$15.00</span>
                    </div>
                    <img src={img3} alt="" className='pages-photos-two'/>
                    <div className='pages-jus-one'>
                        <h2>Creamy Chicken Shashlik</h2>
                        <h2>With Vegetable</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing <br/>elit. Rerum omnis aspernatur eum nam, nostrum laboriosam <br/>
                        </p>
                        <span className='pages-price'>$25.00</span>
                    </div>
            </div>
        </div>
      <div className='pages-part-one'>
        <div className="pages-img">
        <Fade bottom>
            <img src={img1} alt="" className='pages-fotoCamera'/>
        </Fade>
              
          </div>
            <div className="pages-others">
                <div className="pages-part1">
                <Fade right>
                    <h1 className='Title'>Type of Food</h1>

                    <div className="pages-btn">
                        <button className='btn-btn-1'>Fast-food</button>
                        <button className='btn-btn'>Province food</button>
                    </div>

                    <div className="paragraphe">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus perferendis inventore nisi <br/>iusto officiis, earum officia ut laborum repudiandae neque sit illum <span className='span-color'>non assumenda</span> dolores <br/>beatae incidunt hic dignissimos accusamus culpa. <br/>
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolorum voluptatem <span className='span-color'> sequi,<br /> officiis necessitatibus</span> cumque perspiciatis ullam magnam! Dicta esse aliquid, eius nulla earum cumque <br />reprehenderit!Optio placeat cumque modi ducimus <span className='span-color'>mollitia</span> magni, debitis assumenda esse tempore <br />exercitationem cupiditate labore nisi sunt qui! Tempora quia optio aperiam? Doloribus, facilis! Ad!
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, voluptas temporibus, numquam<br /> nobis praesentium accusantium <span className='span-color'>fugit accusamus</span> quas facilis id animi eum perferendis? Magni cumque<br /> asperiores earum quasi aspernatur aliquid. Quae, tenetur. Eligendi, enim illo.<span className='span-color'>Amet laboriosam</span>  <br /> quos vitae iste at, veritatis molestiae dolore voluptatibus praesentium esse consequatur voluptates.
                        </p>
                    </div>
                </Fade>   
                </div>
            </div>
                    {/* <img src={img4} alt="" className='pages-photos'/> */}
                    {/* <img src={img2} alt="" className='pages-photos-one'/> */}
                    {/* <img src={img3} alt="" className='pages-photos-two'/> */}
          </div>

    </div>
  )
}

export default Pages