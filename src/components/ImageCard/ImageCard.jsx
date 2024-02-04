export const ImageCard = ({ item: { urls, alt_description }}) => {

    return (
        <img src={urls.small} alt={alt_description} />        
    )
}