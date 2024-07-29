import "@/assets/styles/loader.css";
const LoadingScreen = () => {
    return (
      <div className="backgroundStyle w-full h-screen flex items-center justify-center fixed top-0 left-0 z-50">
          <div className="loader"></div>
      </div>
    )
  }
  
  export default LoadingScreen