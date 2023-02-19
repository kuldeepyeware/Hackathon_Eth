import Navbar from "./Navbar";

export default function RequestNft() {
  
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex flex-col place-items-center mt-0" id="nftForm">
        <form className="bg-white shadow-md rounded px-8 pt-2 pb-8 mb-4">
          <h3 className="text-center font-bold text-purple-500 mb-8">
            Request NFT From Teachers
          </h3>
          <div className="mb-4">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your NFT name"
              
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Learning Objective Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              cols="40"
              rows="2"
              id="description"
              type="text"
              placeholder="Enter your NFT Description"
              
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-purple-500 text-sm font-bold mb-2"
              htmlFor="format"
            >
              Choose a NFT Format:
            </label>
            <select
              name="format"
              id="format"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="Image">Image</option>
              <option value="Video">Video</option>
              <option value="UML_Diagram">UML Diagram</option>
              <option value="3d_Diagram">3d Diagram</option>
            </select>
          </div>
          <div className="text-green text-center"></div>
          <button
            
            className="font-bold mt-1 w-full bg-purple-500 text-white rounded p-2 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
