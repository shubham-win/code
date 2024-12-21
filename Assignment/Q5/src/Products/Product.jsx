
function Product({ image, name, price, description }) {
    return(
            <div className="p-4 rounded-lg shadow-md"
            style={{
          backgroundColor: 'skyblue',
          height: '450px',
          width: '300px',
        }}>
                <img src= {image} alt = {name} />
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="font-bold">{price}</p>
                <p className="text-sm">{description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy now</button>
            </div>
        );
    }

export default Product;