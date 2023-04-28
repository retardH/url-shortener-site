const Container = ({children}) => {
    return ( 
        <div className="w-full px-4 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl md:px-0 mx-auto mb-8">
            {children}
        </div>
     );
}
 
export default Container;