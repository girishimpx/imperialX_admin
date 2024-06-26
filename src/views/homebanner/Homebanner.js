import React, {useState} from 'react'
import './Homebanner.css'

const Homebanner = () => {
    const [images, setImages] = useState([]);
    const [imageName, setImageName] = useState('');
    const [imageAddName, setImageAddName] = useState(false);
    

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map(file => ({
            src: URL.createObjectURL(file),
            file: file,
            name: ''
        }));
        setImages(prevImages => [...prevImages, ...newImages]);
        setImageAddName(true)
    };

    const handleNameChange = (index, name) => {
        console.log(index, name,'ramesh')
        const updatedImages = [...images];
        updatedImages[index].name = name;
        setImages(updatedImages);
        setImageName(name)
    };

    const handleAddImage = (index) => {
        const image = images[index];
        const newImages = images.map((img, i) => {
            if (i === index) {
                return {
                    ...img,
                    added: true,
                };
            }
            return img;
        });
        setImages(newImages);
        setImageAddName(false)
    };

    const handleDeleteImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    return (
        <div className='homebanner-image-upload'>
            <div className='homebanner-image-upload-button-top'>
            <input type="file" accept="image/*" multiple onChange={handleFileChange} />
            <button>Upload Image</button>
            </div>
            {
                imageAddName == true &&
            <div className='image-name-added-block-outer'>
            <div className='image-name-added-block'  style={{ marginBottom: '10px' }}>
                <img src={images[images.length -1].src} alt="Preview" width="100" />
                <input 
                    type="text" 
                    value={images[images.length -1].name} 
                    onChange={(e) => handleNameChange(images.length -1, e.target.value)} 
                    placeholder="Enter image name"
                />
                <button onClick={() => handleAddImage(images.length -1)} >
                    {images[images.length -1].added ? 'Added' : 'Add Image'}
                </button>
                {/* disabled={image.added} */}
            </div>
         </div>
        }
          <div className='homebanner-image-upload-table'>
            <table>
                <thead>
                    <tr>
                        <th>Banner Image</th>
                        <th>Banner Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {images.filter(img => img.added).map((image, index) => (
                        <tr key={index}>
                            <td><img src={image.src} alt={image.name} width="100" /></td>
                            <td>{image.name}</td>
                            <td><button onClick={() => handleDeleteImage(index)} className='del-banner-home-img'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
           </div>
        </div>
    );
}

export default Homebanner
