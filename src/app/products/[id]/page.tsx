
// DYNAMIC ROUTE

type Props = {
    params:{
        id : string
    }
}

const Product = async( { params }: Props) => {

    const { id } = await params;
    return <h1>Product : {id}</h1>;
}
 
export default Product;