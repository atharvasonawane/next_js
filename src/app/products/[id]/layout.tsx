

type Props = {
    children: React.ReactNode;
}

const ProductLayout = ({children,} : Props) => {
    
    return (<div>{children}
    <div>
        <h2>Featured products section</h2>
    </div>
    </div>
    )
}
 
export default ProductLayout;