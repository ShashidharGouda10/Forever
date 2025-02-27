import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div >
       <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] my-10 mt-40 text-sm">
          <div >
             <img className=" mb-5 w-32" src={assets.logo} alt="" />
             <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio asperiores magni officia, sit at quasi voluptatem id voluptatum sapiente? Dicta et in perferendis neque.</p>
          </div>
          <div >
            <p className="text-lg font-medium mb-5">COMPANY</p>
            <ul className=" flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
          </div>
          <div> 
            <p className="text-xl mb-5 font-medium">GET IN TOUCH</p>
            <ul  className=" flex flex-col gap-1 text-gray-600">
              <li>+91-7022189493</li>
              <li>conatct@foreveryou.com</li>
            </ul>
          </div>
       </div>
       <div>
        <hr />
        <p className=" py-5 text-sm text-center ">Copyright 2025@forever.com-All right Reserved.</p>
       </div>
    </div>
  )
}

export default Footer