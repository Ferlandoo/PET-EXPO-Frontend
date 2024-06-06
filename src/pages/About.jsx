import Meta from '../components/Meta';

const About = () => {
  return (
    <>
      <Meta title='About Us - PET EXPO' />
      <div className="bg-gray-100 min-h-screen py-10 ml-12 sm:ml-14">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="mb-6">
              <h1 className="text-3xl font-semibold text-primary-deep mb-4">About Us</h1>
              <hr className="border-t-2 border-primary-deep w-40 sm:w-80 mx-0" />
              <h2 className="text-2xl font-semibold text-primary-deep mb-4 mt-4">Our History</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Founded in 2010, PET EXPO has grown to become the premier event for pet enthusiasts and professionals alike. Our mission is to celebrate the joy and companionship that pets bring into our lives while promoting responsible pet ownership and the well-being of all animals.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-primary-deep mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                At PET EXPO, we envision a world where every pet is cared for and loved. We aim to create an inclusive and engaging environment where pet owners can learn, share, and connect with one another. Through our events, we strive to raise awareness about pet care, adoption, and the importance of animal welfare.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-primary-deep mb-4">What We Offer</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                PET EXPO offers a variety of activities and attractions for pet lovers of all ages. From educational seminars and workshops to exciting pet shows and competitions, there's something for everyone. Our expo features:
              </p>
              <ul className="list-disc list-inside text-gray-700 text-lg leading-relaxed mt-4">
                <li>Pet adoption drives</li>
                <li>Grooming demonstrations</li>
                <li>Training sessions</li>
                <li>Pet product vendors</li>
                <li>Interactive pet zones</li>
                <li>Veterinary consultations</li>
                <li>And much more!</li>
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-primary-deep mb-4">Join Us</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Whether you're a pet owner, a pet care professional, or simply an animal lover, PET EXPO is the place to be. Join us at our next event and be a part of a community that shares your passion for pets. Together, we can make a difference in the lives of our beloved animal companions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
